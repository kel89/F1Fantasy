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


// MAIN ------------------------------------
// nothing bitch
addRaces();