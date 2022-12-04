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
      Rosters {
        nextToken
      }
      Races {
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
        Team
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
      location
      name
      Drivers {
        nextToken
      }
      result
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
        result
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
      email
      given_name
      family_name
      nickname
      Leagues {
        nextToken
      }
      Rosters {
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
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getLeague = /* GraphQL */ `
  query GetLeague($id: ID!) {
    getLeague(id: $id) {
      id
      owner {
        id
        email
        given_name
        family_name
        nickname
        createdAt
        updatedAt
      }
      users {
        nextToken
      }
      createdAt
      updatedAt
      leagueOwnerId
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
        leagueOwnerId
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
      leauge {
        id
        createdAt
        updatedAt
        leagueOwnerId
      }
      createdAt
      updatedAt
      userRostersId
      rosterLeaugeId
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
        userRostersId
        rosterLeaugeId
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
        Team
        createdAt
        updatedAt
      }
      roster {
        id
        total_points
        breakdown
        createdAt
        updatedAt
        userRostersId
        rosterLeaugeId
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
        Team
        createdAt
        updatedAt
      }
      race {
        id
        date
        location
        name
        result
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
export const getUserLeagues = /* GraphQL */ `
  query GetUserLeagues($id: ID!) {
    getUserLeagues(id: $id) {
      id
      userId
      leagueId
      user {
        id
        email
        given_name
        family_name
        nickname
        createdAt
        updatedAt
      }
      league {
        id
        createdAt
        updatedAt
        leagueOwnerId
      }
      createdAt
      updatedAt
    }
  }
`;
export const listUserLeagues = /* GraphQL */ `
  query ListUserLeagues(
    $filter: ModelUserLeaguesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserLeagues(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userId
        leagueId
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
export const userLeaguesByUserId = /* GraphQL */ `
  query UserLeaguesByUserId(
    $userId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelUserLeaguesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    userLeaguesByUserId(
      userId: $userId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        userId
        leagueId
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const userLeaguesByLeagueId = /* GraphQL */ `
  query UserLeaguesByLeagueId(
    $leagueId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelUserLeaguesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    userLeaguesByLeagueId(
      leagueId: $leagueId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        userId
        leagueId
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
