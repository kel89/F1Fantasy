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
      createdAt
      updatedAt
      raceDriversId
      raceResultsId
      rosterDriversId
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
      createdAt
      updatedAt
      raceDriversId
      raceResultsId
      rosterDriversId
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
      createdAt
      updatedAt
      raceDriversId
      raceResultsId
      rosterDriversId
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
      Results {
        nextToken
      }
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
      Results {
        nextToken
      }
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
      Results {
        nextToken
      }
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
      name
      Leagues {
        id
        createdAt
        updatedAt
      }
      Rosters {
        nextToken
      }
      createdAt
      updatedAt
      leagueUsersId
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
      name
      Leagues {
        id
        createdAt
        updatedAt
      }
      Rosters {
        nextToken
      }
      createdAt
      updatedAt
      leagueUsersId
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
      name
      Leagues {
        id
        createdAt
        updatedAt
      }
      Rosters {
        nextToken
      }
      createdAt
      updatedAt
      leagueUsersId
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
      users {
        nextToken
      }
      createdAt
      updatedAt
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
      users {
        nextToken
      }
      createdAt
      updatedAt
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
      users {
        nextToken
      }
      createdAt
      updatedAt
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
      }
      createdAt
      updatedAt
      userRostersId
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
      }
      createdAt
      updatedAt
      userRostersId
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
      }
      createdAt
      updatedAt
      userRostersId
    }
  }
`;
