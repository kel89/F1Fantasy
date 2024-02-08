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
        __typename
      }
      createdAt
      updatedAt
      __typename
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
        __typename
      }
      createdAt
      updatedAt
      __typename
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
        __typename
      }
      createdAt
      updatedAt
      __typename
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
export const createCommissionerMessage = /* GraphQL */ `
  mutation CreateCommissionerMessage(
    $input: CreateCommissionerMessageInput!
    $condition: ModelCommissionerMessageConditionInput
  ) {
    createCommissionerMessage(input: $input, condition: $condition) {
      message
      last_edit_by
      id
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateCommissionerMessage = /* GraphQL */ `
  mutation UpdateCommissionerMessage(
    $input: UpdateCommissionerMessageInput!
    $condition: ModelCommissionerMessageConditionInput
  ) {
    updateCommissionerMessage(input: $input, condition: $condition) {
      message
      last_edit_by
      id
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteCommissionerMessage = /* GraphQL */ `
  mutation DeleteCommissionerMessage(
    $input: DeleteCommissionerMessageInput!
    $condition: ModelCommissionerMessageConditionInput
  ) {
    deleteCommissionerMessage(input: $input, condition: $condition) {
      message
      last_edit_by
      id
      createdAt
      updatedAt
      __typename
    }
  }
`;
