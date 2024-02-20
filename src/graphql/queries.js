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
      results {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
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
        __typename
      }
      nextToken
      __typename
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
      result {
        nextToken
        __typename
      }
      rosters {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
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
        __typename
      }
      nextToken
      __typename
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
        __typename
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
        __typename
      }
      points
      id
      createdAt
      updatedAt
      driverResultsId
      raceResultId
      __typename
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
        driverResultsId
        raceResultId
        __typename
      }
      nextToken
      __typename
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
      admin
      rosters {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
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
        admin
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getRoster = /* GraphQL */ `
  query GetRoster($id: ID!) {
    getRoster(id: $id) {
      id
      driver_order
      total_points
      breakdown
      user {
        id
        email
        given_name
        family_name
        nickname
        total_points
        admin
        createdAt
        updatedAt
        __typename
      }
      race {
        id
        date
        country
        city
        name
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      raceRostersId
      userRostersId
      __typename
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
        driver_order
        total_points
        breakdown
        createdAt
        updatedAt
        raceRostersId
        userRostersId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getCommissionerMessage = /* GraphQL */ `
  query GetCommissionerMessage($id: ID!) {
    getCommissionerMessage(id: $id) {
      message
      last_edit_by
      id
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listCommissionerMessages = /* GraphQL */ `
  query ListCommissionerMessages(
    $filter: ModelCommissionerMessageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCommissionerMessages(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        message
        last_edit_by
        id
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
