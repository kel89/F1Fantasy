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
          }
        }
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;