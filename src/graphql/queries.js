/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getDriver = /* GraphQL */ `
  query GetDriver($id: ID!) {
    getDriver(id: $id) {
      id
      first_name
      last_name
      abbreviation
      number
      Team
      createdAt
      updatedAt
      raceDriversId
      raceResultsId
      rosterDriversId
    }
  }
`;
export const listDrivers = /* GraphQL */ `
  query ListDrivers(
    $filter: ModelDriverFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDrivers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        first_name
        last_name
        abbreviation
        number
        Team
        createdAt
        updatedAt
        raceDriversId
        raceResultsId
        rosterDriversId
      }
      nextToken
    }
  }
`;
export const getRace = /* GraphQL */ `
  query GetRace($id: ID!) {
    getRace(id: $id) {
      id
      date
      location
      name
      Drivers {
        nextToken
      }
      Results {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listRaces = /* GraphQL */ `
  query ListRaces(
    $filter: ModelRaceFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRaces(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        date
        location
        name
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      name
      Leagues {
        id
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      leagueUsersId
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        createdAt
        updatedAt
        leagueUsersId
      }
      nextToken
    }
  }
`;
export const getLeague = /* GraphQL */ `
  query GetLeague($id: ID!) {
    getLeague(id: $id) {
      id
      users {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listLeagues = /* GraphQL */ `
  query ListLeagues(
    $filter: ModelLeagueFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLeagues(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getRoster = /* GraphQL */ `
  query GetRoster($id: ID!) {
    getRoster(id: $id) {
      id
      drivers {
        nextToken
      }
      total_points
      breakdown
      createdAt
      updatedAt
    }
  }
`;
export const listRosters = /* GraphQL */ `
  query ListRosters(
    $filter: ModelRosterFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRosters(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        total_points
        breakdown
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
