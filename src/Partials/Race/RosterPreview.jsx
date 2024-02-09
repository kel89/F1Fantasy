import { List, ListItem, ListItemText } from "@mui/material";
import { API } from "aws-amplify";
import { useEffect, useState } from "react";
import ReactLoading from "react-loading";
import { generateClient } from "@aws-amplify/api";
import { getRoster, listDrivers } from "../../graphql/queries";
import { getDetailedRoster } from "../../graphql/customQueries";

export default function RosterPreview({ id, toggler }) {
  const [rosterData, setRosterData] = useState();
  const [drivers, setDrivers] = useState();
  const [raceResults, setRaceResults] = useState([]);
  const apiClient = generateClient();

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    setTimeout(getData, 500);
  }, [toggler]);


  // Sort the results if there are any?
  useEffect(() => {
    if (rosterData && rosterData?.race?.result) {
      let resultData = rosterData.race.result.items;
      resultData
        .sort((a, b) => b.points - a.points)
        .forEach((d, i) => (d["place"] = i + 1));
      setRaceResults(resultData);
    }
  }, [rosterData]);

  const getData = async () => {
    // let qs = String(`
    // query GetRoster {
    //     getRoster(id: "${id}"){
    //         breakdown
    //         driver_order
    //         total_points
    //         updatedAt
    //         user {
    //             nickname
    //             given_name
    //             family_name
    //         }
    //         race {
    //             name
    //             city
    //             country
    //             drivers {
    //                 items {
    //                     driver {
    //                         first_name
    //                         last_name
    //                         abbreviation
    //                         team
    //                         number
    //                     }
    //                 }
    //             }
    //             result {
    //                 items {
    //                     points
    //                     driver {
    //                         first_name
    //                         last_name
    //                         abbreviation
    //                         team
    //                         number
    //                         id
    //                     }
    //                 }
    //             }
    //         }
    //     }
    // }
    // `);
    // let resp = await API.graphql({query: qs});
    // setRosterData(resp.data.getRoster);
    // setDriverData(resp.data.getRoster.race.drivers.items);

    // // Sorts results (if exist, and give a place)
    // let resultData = resp.data.getRoster.race.result.items;
    // resultData.sort((a,b) => b.points - a.points)
    //     .forEach((d,i) => d['place'] = i+1);
    // setRaceResults(resultData);
    const result = await apiClient.graphql({
      query: getDetailedRoster,
      variables: { id: id },
    });
    setRosterData(result.data.getRoster);

    const driverResult = await apiClient.graphql({query: listDrivers});
    setDrivers(driverResult.data.listDrivers.items);
  };

  if (rosterData == undefined || drivers == undefined) {
    return <ReactLoading type="bars" color="red" />;
  }

  const getDriverImage = (abbreviation) => {
    try {
      return (
        <img
          className="inline-block h-16 w-16"
          src={require(`../../assets/drivers/${abbreviation.toLowerCase()}.png`)}
          alt={""}
        />
      );
    } catch {
      return null;
    }
  };

  const getBackgroundColor = (driverAbbreviation, place) => {
    let match = raceResults.filter(
      (x) => x?.driver?.abbreviation === driverAbbreviation
    );
    if (match.length > 0) {
      let truePlace = match[0].place;
      if (truePlace == place) {
        return "bg-green-200";
      } else {
        return "bg-red-200";
      }
    }
    return "bg-white";
  }

  return (
    <div className="flex flex-col w-full gap-1">
      {
        JSON.parse(rosterData.driver_order).slice(0, 10).map((d, i) => {
        let abbreviation = d.split("-")[0];
        let driver = drivers.find((x) => x.abbreviation === abbreviation);
        const bgClassColor = getBackgroundColor(abbreviation, i);
        return (
          <div
            key={i}
            className={`flex gap-8 items-center border-t border-gray-200 transition duration-300 ease-in-out ${bgClassColor}`}
          >
            <div className="font-bold text-gray-800 text-xl pl-1">{i + 1}</div>
            {getDriverImage(driver.abbreviation)}
            <div className="ml-4 flex flex-col">
              <div className="text-lg text-gray-800">
                {driver.first_name} {driver.last_name}
              </div>
              <div className="text-gray-500">{driver.team}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
