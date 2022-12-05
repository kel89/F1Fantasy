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
      team
      rosters {
        nextToken
      }
      races {
        nextToken
      }
      createdAt
      updatedAt
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
        team
        createdAt
        updatedAt
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
      country
      city
      name
      drivers {
        nextToken
      }
      result {
        nextToken
      }
      rosters {
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
        country
        city
        name
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getResult = /* GraphQL */ `
  query GetResult($id: ID!) {
    getResult(id: $id) {
      race {
        id
        date
        country
        city
        name
        createdAt
        updatedAt
      }
      driver {
        id
        first_name
        last_name
        abbreviation
        number
        team
        createdAt
        updatedAt
      }
      points
      id
      createdAt
      updatedAt
      raceResultId
    }
  }
`;
export const listResults = /* GraphQL */ `
  query ListResults(
    $filter: ModelResultFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listResults(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        points
        id
        createdAt
        updatedAt
        raceResultId
      }
      nextToken
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      email
      given_name
      family_name
      nickname
      total_points
      rosters {
        nextToken
      }
      createdAt
      updatedAt
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
        email
        given_name
        family_name
        nickname
        total_points
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
      user {
        id
        email
        given_name
        family_name
        nickname
        total_points
        createdAt
        updatedAt
      }
      race {
        id
        date
        country
        city
        name
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      raceRostersId
      userRostersId
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
        raceRostersId
        userRostersId
      }
      nextToken
    }
  }
`;
export const getChangeAllowed = /* GraphQL */ `
  query GetChangeAllowed($id: ID!) {
    getChangeAllowed(id: $id) {
      allowed
      id
      createdAt
      updatedAt
    }
  }
`;
export const listChangeAlloweds = /* GraphQL */ `
  query ListChangeAlloweds(
    $filter: ModelChangeAllowedFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listChangeAlloweds(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        allowed
        id
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getRosterDrivers = /* GraphQL */ `
  query GetRosterDrivers($id: ID!) {
    getRosterDrivers(id: $id) {
      id
      driverId
      rosterId
      driver {
        id
        first_name
        last_name
        abbreviation
        number
        team
        createdAt
        updatedAt
      }
      roster {
        id
        total_points
        breakdown
        createdAt
        updatedAt
        raceRostersId
        userRostersId
      }
      createdAt
      updatedAt
    }
  }
`;
export const listRosterDrivers = /* GraphQL */ `
  query ListRosterDrivers(
    $filter: ModelRosterDriversFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRosterDrivers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        driverId
        rosterId
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getRaceDrivers = /* GraphQL */ `
  query GetRaceDrivers($id: ID!) {
    getRaceDrivers(id: $id) {
      id
      driverId
      raceId
      driver {
        id
        first_name
        last_name
        abbreviation
        number
        team
        createdAt
        updatedAt
      }
      race {
        id
        date
        country
        city
        name
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listRaceDrivers = /* GraphQL */ `
  query ListRaceDrivers(
    $filter: ModelRaceDriversFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRaceDrivers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        driverId
        raceId
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const rosterDriversByDriverId = /* GraphQL */ `
  query RosterDriversByDriverId(
    $driverId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelRosterDriversFilterInput
    $limit: Int
    $nextToken: String
  ) {
    rosterDriversByDriverId(
      driverId: $driverId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        driverId
        rosterId
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const rosterDriversByRosterId = /* GraphQL */ `
  query RosterDriversByRosterId(
    $rosterId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelRosterDriversFilterInput
    $limit: Int
    $nextToken: String
  ) {
    rosterDriversByRosterId(
      rosterId: $rosterId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        driverId
        rosterId
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const raceDriversByDriverId = /* GraphQL */ `
  query RaceDriversByDriverId(
    $driverId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelRaceDriversFilterInput
    $limit: Int
    $nextToken: String
  ) {
    raceDriversByDriverId(
      driverId: $driverId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        driverId
        raceId
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const raceDriversByRaceId = /* GraphQL */ `
  query RaceDriversByRaceId(
    $raceId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelRaceDriversFilterInput
    $limit: Int
    $nextToken: String
  ) {
    raceDriversByRaceId(
      raceId: $raceId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        driverId
        raceId
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
