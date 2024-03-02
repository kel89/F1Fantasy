export const getRaceAndRosters = /* GraphQL */ `
    query GetRace($id: ID!) {
        getRace(id: $id) {
            id
            date
            country
            city
            name
            result {
                nextToken
                __typename
                items {
                    driver {
                        id
                        abbreviation
                        first_name
                        last_name
                        team
                    }
                    points
                    updatedAt
                }
            }
            rosters {
                nextToken
                __typename
                items {
                    id
                    driver_order
                    total_points
                    breakdown
                    user {
                        id
                        nickname
                        given_name
                    }
                }
            }
            createdAt
            updatedAt
            __typename
        }
    }
`;

export const getDetailedRoster = /* GraphQl */ `
    query GetRoster($id: ID!) {
        getRoster(id: $id){
            breakdown
            driver_order
            total_points
            updatedAt
            user {
                nickname
                given_name
                family_name
            }
            race {
                name
                city
                country
                result {
                    items {
                        points 
                        driver {
                            first_name
                            last_name
                            abbreviation
                            team
                            number
                            id
                        }
                    }
                }
            }
        }
    }
`;
