/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createDriver = /* GraphQL */ `
  mutation CreateDriver(
    $input: CreateDriverInput!
    $condition: ModelDriverConditionInput
  ) {
    createDriver(input: $input, condition: $condition) {
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
export const updateDriver = /* GraphQL */ `
  mutation UpdateDriver(
    $input: UpdateDriverInput!
    $condition: ModelDriverConditionInput
  ) {
    updateDriver(input: $input, condition: $condition) {
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
export const deleteDriver = /* GraphQL */ `
  mutation DeleteDriver(
    $input: DeleteDriverInput!
    $condition: ModelDriverConditionInput
  ) {
    deleteDriver(input: $input, condition: $condition) {
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
export const createRace = /* GraphQL */ `
  mutation CreateRace(
    $input: CreateRaceInput!
    $condition: ModelRaceConditionInput
  ) {
    createRace(input: $input, condition: $condition) {
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
export const updateRace = /* GraphQL */ `
  mutation UpdateRace(
    $input: UpdateRaceInput!
    $condition: ModelRaceConditionInput
  ) {
    updateRace(input: $input, condition: $condition) {
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
export const deleteRace = /* GraphQL */ `
  mutation DeleteRace(
    $input: DeleteRaceInput!
    $condition: ModelRaceConditionInput
  ) {
    deleteRace(input: $input, condition: $condition) {
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
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createLeague = /* GraphQL */ `
  mutation CreateLeague(
    $input: CreateLeagueInput!
    $condition: ModelLeagueConditionInput
  ) {
    createLeague(input: $input, condition: $condition) {
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
export const updateLeague = /* GraphQL */ `
  mutation UpdateLeague(
    $input: UpdateLeagueInput!
    $condition: ModelLeagueConditionInput
  ) {
    updateLeague(input: $input, condition: $condition) {
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
export const deleteLeague = /* GraphQL */ `
  mutation DeleteLeague(
    $input: DeleteLeagueInput!
    $condition: ModelLeagueConditionInput
  ) {
    deleteLeague(input: $input, condition: $condition) {
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
export const createRoster = /* GraphQL */ `
  mutation CreateRoster(
    $input: CreateRosterInput!
    $condition: ModelRosterConditionInput
  ) {
    createRoster(input: $input, condition: $condition) {
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
export const updateRoster = /* GraphQL */ `
  mutation UpdateRoster(
    $input: UpdateRosterInput!
    $condition: ModelRosterConditionInput
  ) {
    updateRoster(input: $input, condition: $condition) {
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
export const deleteRoster = /* GraphQL */ `
  mutation DeleteRoster(
    $input: DeleteRosterInput!
    $condition: ModelRosterConditionInput
  ) {
    deleteRoster(input: $input, condition: $condition) {
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
export const createRosterDrivers = /* GraphQL */ `
  mutation CreateRosterDrivers(
    $input: CreateRosterDriversInput!
    $condition: ModelRosterDriversConditionInput
  ) {
    createRosterDrivers(input: $input, condition: $condition) {
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
export const updateRosterDrivers = /* GraphQL */ `
  mutation UpdateRosterDrivers(
    $input: UpdateRosterDriversInput!
    $condition: ModelRosterDriversConditionInput
  ) {
    updateRosterDrivers(input: $input, condition: $condition) {
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
export const deleteRosterDrivers = /* GraphQL */ `
  mutation DeleteRosterDrivers(
    $input: DeleteRosterDriversInput!
    $condition: ModelRosterDriversConditionInput
  ) {
    deleteRosterDrivers(input: $input, condition: $condition) {
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
export const createRaceDrivers = /* GraphQL */ `
  mutation CreateRaceDrivers(
    $input: CreateRaceDriversInput!
    $condition: ModelRaceDriversConditionInput
  ) {
    createRaceDrivers(input: $input, condition: $condition) {
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
export const updateRaceDrivers = /* GraphQL */ `
  mutation UpdateRaceDrivers(
    $input: UpdateRaceDriversInput!
    $condition: ModelRaceDriversConditionInput
  ) {
    updateRaceDrivers(input: $input, condition: $condition) {
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
export const deleteRaceDrivers = /* GraphQL */ `
  mutation DeleteRaceDrivers(
    $input: DeleteRaceDriversInput!
    $condition: ModelRaceDriversConditionInput
  ) {
    deleteRaceDrivers(input: $input, condition: $condition) {
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
export const createUserLeagues = /* GraphQL */ `
  mutation CreateUserLeagues(
    $input: CreateUserLeaguesInput!
    $condition: ModelUserLeaguesConditionInput
  ) {
    createUserLeagues(input: $input, condition: $condition) {
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
export const updateUserLeagues = /* GraphQL */ `
  mutation UpdateUserLeagues(
    $input: UpdateUserLeaguesInput!
    $condition: ModelUserLeaguesConditionInput
  ) {
    updateUserLeagues(input: $input, condition: $condition) {
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
export const deleteUserLeagues = /* GraphQL */ `
  mutation DeleteUserLeagues(
    $input: DeleteUserLeaguesInput!
    $condition: ModelUserLeaguesConditionInput
  ) {
    deleteUserLeagues(input: $input, condition: $condition) {
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
