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
import { Amplify, API } from 'aws-amplify';
import awsExports from './aws-exports.mjs'; // NOTE, make manually, and may change

Amplify.configure(awsExports);

const qs = `
query MQ {
    listUsers {
        items {
            id
            email
            nickname
        }
    }
}
`;
let resp = await API.graphql({query: qs});
console.log(JSON.stringify(resp));