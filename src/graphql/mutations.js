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
      team
      races {
        nextToken
      }
      results {
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
      team
      races {
        nextToken
      }
      results {
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
      team
      races {
        nextToken
      }
      results {
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
export const updateRace = /* GraphQL */ `
  mutation UpdateRace(
    $input: UpdateRaceInput!
    $condition: ModelRaceConditionInput
  ) {
    updateRace(input: $input, condition: $condition) {
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
export const deleteRace = /* GraphQL */ `
  mutation DeleteRace(
    $input: DeleteRaceInput!
    $condition: ModelRaceConditionInput
  ) {
    deleteRace(input: $input, condition: $condition) {
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
export const createResult = /* GraphQL */ `
  mutation CreateResult(
    $input: CreateResultInput!
    $condition: ModelResultConditionInput
  ) {
    createResult(input: $input, condition: $condition) {
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
      driverResultsId
      raceResultId
    }
  }
`;
export const updateResult = /* GraphQL */ `
  mutation UpdateResult(
    $input: UpdateResultInput!
    $condition: ModelResultConditionInput
  ) {
    updateResult(input: $input, condition: $condition) {
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
      driverResultsId
      raceResultId
    }
  }
`;
export const deleteResult = /* GraphQL */ `
  mutation DeleteResult(
    $input: DeleteResultInput!
    $condition: ModelResultConditionInput
  ) {
    deleteResult(input: $input, condition: $condition) {
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
      driverResultsId
      raceResultId
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
      total_points
      rosters {
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
      total_points
      rosters {
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
      total_points
      rosters {
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
export const updateRoster = /* GraphQL */ `
  mutation UpdateRoster(
    $input: UpdateRosterInput!
    $condition: ModelRosterConditionInput
  ) {
    updateRoster(input: $input, condition: $condition) {
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
export const deleteRoster = /* GraphQL */ `
  mutation DeleteRoster(
    $input: DeleteRosterInput!
    $condition: ModelRosterConditionInput
  ) {
    deleteRoster(input: $input, condition: $condition) {
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
export const createChangeAllowed = /* GraphQL */ `
  mutation CreateChangeAllowed(
    $input: CreateChangeAllowedInput!
    $condition: ModelChangeAllowedConditionInput
  ) {
    createChangeAllowed(input: $input, condition: $condition) {
      allowed
      id
      createdAt
      updatedAt
    }
  }
`;
export const updateChangeAllowed = /* GraphQL */ `
  mutation UpdateChangeAllowed(
    $input: UpdateChangeAllowedInput!
    $condition: ModelChangeAllowedConditionInput
  ) {
    updateChangeAllowed(input: $input, condition: $condition) {
      allowed
      id
      createdAt
      updatedAt
    }
  }
`;
export const deleteChangeAllowed = /* GraphQL */ `
  mutation DeleteChangeAllowed(
    $input: DeleteChangeAllowedInput!
    $condition: ModelChangeAllowedConditionInput
  ) {
    deleteChangeAllowed(input: $input, condition: $condition) {
      allowed
      id
      createdAt
      updatedAt
    }
  }
`;
export const createCommisionerMessage = /* GraphQL */ `
  mutation CreateCommisionerMessage(
    $input: CreateCommisionerMessageInput!
    $condition: ModelCommisionerMessageConditionInput
  ) {
    createCommisionerMessage(input: $input, condition: $condition) {
      message
      id
      createdAt
      updatedAt
    }
  }
`;
export const updateCommisionerMessage = /* GraphQL */ `
  mutation UpdateCommisionerMessage(
    $input: UpdateCommisionerMessageInput!
    $condition: ModelCommisionerMessageConditionInput
  ) {
    updateCommisionerMessage(input: $input, condition: $condition) {
      message
      id
      createdAt
      updatedAt
    }
  }
`;
export const deleteCommisionerMessage = /* GraphQL */ `
  mutation DeleteCommisionerMessage(
    $input: DeleteCommisionerMessageInput!
    $condition: ModelCommisionerMessageConditionInput
  ) {
    deleteCommisionerMessage(input: $input, condition: $condition) {
      message
      id
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
