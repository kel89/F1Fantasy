//  ____                       ____                
// / ___|  ___ ___  _ __ ___  |  _ \ __ _  ___ ___ 
// \___ \ / __/ _ \| '__/ _ \ | |_) / _` |/ __/ _ \
//  ___) | (_| (_) | | |  __/ |  _ < (_| | (_|  __/
// |____/ \___\___/|_|  \___| |_| \_\__,_|\___\___|
                                                
import { Amplify, API, graphqlOperation } from 'aws-amplify';
import awsExports from './aws-exports.mjs'; // NOTE, make manually, and may change

Amplify.configure(awsExports);

const scoreRace = (raceId, results) => {
    console.log("Creating Results...");
    createResults(raceId, results);

    console.log("Scoring Rosters...");
    scoreRosters(raceId, results);

    console.log("Updating User Scores...");
    updateUserTotalScores(raceId);
}

/**
 * Creates DB Result Objects for each place
 * linking driver and race
 * @param {String} raceId 
 * @param {Array[Object]} results 
 */
const createResults = async (raceId, results) => {
    // For each place in the results
    results.forEach(async result => {
        // get the driver Id
        let driverId = await getDriverByAbbrev(result.driver);

        // create a result object
        makeResultEntry(driverId, result.points, raceId)
    });
}


/**
 * Returns the DB ID for the driver if it can find it
 * @param {String} abbrev driver abbreviation
 * @returns Driver String ID if can find or null
 */
const getDriverByAbbrev = async (abbrev) => {
    let qs = String(`
    query FindDriver{
        listDrivers(filter: {abbreviation: {eq : "${abbrev}"}}){
            items {
                id
            }
        }
    }`);
    
    // If we got a driver back, return the ID
    try {
        let resp = await API.graphql({query:qs});
        let driver = resp.data.listDrivers.items[0];
        return driver.id;
    } catch (error) {
        console.warn(error);
        return null;
    }
}

/**
 * Creates a DB Result object for a single result
 * @param {String} driverId 
 * @param {Int} points 
 * @param {String} raceId 
 */
const makeResultEntry = async (driverId, points, raceId) => {
    let qs = String(`
    mutation CreateResult{
        createResult(input: {points:${points}, raceResultId: "${raceId}", driverResultsId: "${driverId}"}){
            id
        }
    }
    `);
    try {
        let res = await API.graphql({query:qs});
    } catch (error) {
        console.warn(error);
        console.log("Result not created for driver ID", driverId)
    }
}


/**
 * Finds all the rosters for the given race
 * Uses the results which have already been added to the DB to score
 * each roster
 * @param {String} raceId 
 */
const scoreRosters = async (raceId, results) => {
    // Get all rosters for the race
    let allRosters = await getRaceRosters(raceId);

    // For each roster, extract prediction, and score
    allRosters.forEach(async roster => {
        let points = calculatePoints(roster.driver_order, results);
        await updateRosterPoints(roster.id, points);
    })
}

/**
 * Gets all of the rosters attached to a specific race
 * @param {String} raceId 
 * @returns List of rosters {id, driver_order} or empty list
 */
const getRaceRosters = async (raceId) => {
    let qs = String(`
    query GetRosters {
        listRosters(filter: {raceRostersId: {eq: "${raceId}"}}){
            items {
                id
                driver_order
                total_points
                user {
                    id
                    total_points
                }
            }
        }
    }
    `);
    try {
        let res = await API.graphql({query:qs});
        return res.data.listRosters.items;
    } catch (error) {
        console.warn(error);
        return []
    }
}

/**
 * Calculates the total points awarded to a roster
 * @param {Array} driverOrder Array of driver order per roster so "SSS-P"
 * @param {Array} results list of objects that have driver abbrev and points
 * @returns Int
 */
const calculatePoints = (driverOrder, results) => {
    let points = 0;

    // For each driver in driver order
    driverOrder.forEach(driver => {
        // Get that predicted place
        let [abbrev, place] = driver.split("-");
        
        // Find match in results
        let res = results.filter(x => x.driver == abbrev);
        if (res.length > 0) {
            let actualPlace = res[0].place;
            if (actualPlace == place){
                points += res[0].points;
            }
        }
    });

    return points
}

/**
 * Updates the points for a roster in the DB
 * @param {String} rosterId DB id for a given roster
 * @param {Int} points Points to give to the roster
 */
const updateRosterPoints = async (rosterId, points) => {
    let qs = String(`
    mutation UpdatePoints{
        updateRoster(input: {id: "${rosterId}", total_points: ${points}}){
            id
        }
    }
    `);
    try {
        let res = await API.graphql({query:qs});
    } catch (error) {
        console.warn(error);
    }
}

/**
 * For each user that has a roster in the race, updates
 * their total score by the score of the roster for this race
 */
const updateUserTotalScores = async (raceId) => {
    // get all rosters for a race
    let allRosters = await getRaceRosters(raceId);

    // For each roster, get the user and update their points
    allRosters.forEach(async roster => {
        // Update the points
        let newPoints = roster.user.total_points + roster.total_points;
        await updateUserPoints(roster.user.id, newPoints);
    })
}

const updateUserPoints = async (userId, points) => {
    let qs = String(`
    mutation UpdateUserPoints{
        updateUser (input: {id: "${userId}", total_points: ${points}}){
            id
        }
    }
    `);
    try {
        let resp = await API.graphql({query: qs});
    } catch (error) {
        console.warn(error);
    }
}



// -----------------------------------------------------------------------------
let raceResults = [
    {
        place: 1,
        driver: "HAM",
        points: 25
    },
    {
        place: 2,
        driver: "RUS",
        points: 18
    },
    {
        place: 3,
        driver: "VER",
        points: 15
    },
    {
        place: 4,
        driver: "PER",
        points: 12
    },
    {
        place: 5,
        driver: "LEC",
        points: 10
    },
    {
        place: 6,
        driver: "SAI",
        points: 8
    },
    {
        place: 7,
        driver: "GAS",
        points: 6
    },
    {
        place: 8,
        driver: "ALO",
        points: 4
    },
    {
        place: 9,
        driver: "STR",
        points: 2
    },
    {
        place: 10,
        driver: "MAG",
        points: 1
    }
];

// Get the Race ID Mannually from the DB or wherever
let raceId = "be8663b1-3552-4e2a-bf8f-12314546f014";

scoreRace(raceId, raceResults);