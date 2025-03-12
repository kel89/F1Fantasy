import driverData from "./drivers.json" assert { type: "json" };
import raceData from "./races_2025.json" assert { type: "json" };

const API_KEY = "da2-rjzpblnif5bcrfiynvi5vcz4ni";
const API_ENDPOINT =
    "https://wtaoylxkkvgcpiyghj3ozeiuga.appsync-api.us-east-1.amazonaws.com/graphql";

const addDrivers = async (drivers) => {
    for (const driver of drivers) {
        await addDriver(driver);
    }
};

const addDriver = async (driver) => {
    let addDriverQ = `
        mutation CreateDriver {
            createDriver(input: {
                first_name: "${driver.first_name}",
                last_name: "${driver.last_name}",
                abbreviation: "${driver.abbreviation}",
                number: "${driver.number}",
                team: "${driver.team}"
            }){
                id
            }
        }`;
    console.log("Adding driver: ", driver.first_name, driver.last_name);
    let res = await fetch(API_ENDPOINT, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "x-api-key": API_KEY,
        },
        body: JSON.stringify({ query: addDriverQ }),
    });
    let data = await res.json();
    console.log("Added!");
};

const addRaces = async (races) => {
    for (const race of races) {
        await addRace(race);
    }
};

const addRace = async (race) => {
    let qs = String(`
        mutation CreateRace {
            createRace( input: {
                date: "${race.date}",
                country: "${race.country}",
                city: "${race.city}",
                name: "${race.name}"
            }){
                id
            }
        }
        `);
    console.log(qs);
    let res = await fetch(API_ENDPOINT, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "x-api-key": API_KEY,
        },
        body: JSON.stringify({ query: qs }),
    });
    let data = await res.json();
    console.log("Added!");
};

// addDrivers(driverData);
addRaces(raceData);
