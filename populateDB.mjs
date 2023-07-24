// ____                   _       _         ____  ____  
// |  _ \ ___  _ __  _   _| | __ _| |_ ___  |  _ \| __ ) 
// | |_) / _ \| '_ \| | | | |/ _` | __/ _ \ | | | |  _ \ 
// |  __/ (_) | |_) | |_| | | (_| | ||  __/ | |_| | |_) |
// |_|   \___/| .__/ \__,_|_|\__,_|\__\___| |____/|____/ 
//            |_|                             
/**
 * Helper script to populate the DB
 * Eventually set this up to read from a CSV or a JSON
 * with the list of Drivers and races, and will probably have
 * something similar to do the scoring
 *  */           
import { Amplify, API, graphqlOperation } from 'aws-amplify';
import awsExports from './aws-exports.mjs'; // NOTE, make manually, and may change
import driverData from './drivers.json' assert {type: 'json'};
import raceData from './races.json' assert {type: 'json'}

Amplify.configure(awsExports);

// Test Querry ------------------------------------------
// const qs = `
// query MQ {
//     listUsers {
//         items {
//             id
//             email
//             nickname
//         }
//     }
// }
// `;
// let resp = await API.graphql({query: qs});
// console.log(JSON.stringify(resp));

// Make a league ----------------------------------------
// const ms = `
// mutation CreateLeague {
//     createLeage {
//         id
//     }
// }
// `
// let resp = await API.graphql({mutation: ms});
// console.log(JSON.stringify(resp));

// Add all drivers --------------------------------------
const addDrivers = () => {
    driverData.forEach(async driver => {
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
        let s = String(addDriverQ); // this step is CRITICAL--for some reason
        let resp = await API.graphql({query: s});
        console.log(resp);
    });
}

const addRaces = () => {
    raceData.forEach(async race => {
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
        // console.log(qs);
        let resp = await API.graphql({query:qs});
        console.log(resp);
    })
}

const addAllDriversToAllRaces = async () => {
    // Get all of the drivers...
    let getDrivers = String(`
    query GetDrivers {
        listDrivers {
            items {
                id
            }
        }
    }
    `);
    let driversResp = await API.graphql({query:getDrivers});
    let allDrivers = driversResp.data.listDrivers.items;
    console.log(allDrivers);
    // Get all of the races...
    let getRaces = String(`
    query GetRaces {
        listRaces {
            items {
                id
            }
        }
    }
    `)
    let racesResp = await API.graphql({query: getRaces});
    let allRaces = racesResp.data.listRaces.items;
    console.log(allRaces);
    // Add all of the drivers to all of the races
    allRaces.forEach(async race => {
        allDrivers.forEach(async driver => {
            let qs = String(`
            mutation AddLink {
                createRaceDrivers(input: {driverId: "${driver.id}", raceId: "${race.id}"}){
                    id
                }
            }
            `);
            let resp = await API.graphql({query: qs});
            console.log(resp);
        })
    })
}

/**
 * Adds a new driver to the races
 * @param {String} driverId 
 */
const addNewDriverToRaces = async (driverId, startDate) => {
    // Get the races to add the driver to
    let getRaces = String(`
    query MyQuery {
        listRaces(filter: {date: {ge: "${startDate}"}}) {
            items {
            id
            name
            }
        }
    }
    `)
    let racesResp = await API.graphql({query: getRaces});
    let allRaces = racesResp.data.listRaces.items;
    console.log(allRaces);

    // Add the driver to those races
    allRaces.forEach(async race => {
        let qs = String(`
        mutation AddLink {
            createRaceDrivers(input: {driverId: "${driverId}", raceId: "${race.id}"}){
                id
            }
        }
        `);
        let resp = await API.graphql({query: qs});
        console.log(resp);
    })
}


// MAIN ------------------------------------
// nothing bitch

// Add danny ric to remaining races
// addNewDriverToRaces("e0cb048e-5f35-4ba8-8b68-a8e9ab8ce1fa", "2023-07-24");