/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateDriver = /* GraphQL */ `
  subscription OnCreateDriver($filter: ModelSubscriptionDriverFilterInput) {
    onCreateDriver(filter: $filter) {
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
export const onUpdateDriver = /* GraphQL */ `
  subscription OnUpdateDriver($filter: ModelSubscriptionDriverFilterInput) {
    onUpdateDriver(filter: $filter) {
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
export const onDeleteDriver = /* GraphQL */ `
  subscription OnDeleteDriver($filter: ModelSubscriptionDriverFilterInput) {
    onDeleteDriver(filter: $filter) {
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
export const onCreateRace = /* GraphQL */ `
  subscription OnCreateRace($filter: ModelSubscriptionRaceFilterInput) {
    onCreateRace(filter: $filter) {
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
export const onUpdateRace = /* GraphQL */ `
  subscription OnUpdateRace($filter: ModelSubscriptionRaceFilterInput) {
    onUpdateRace(filter: $filter) {
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
export const onDeleteRace = /* GraphQL */ `
  subscription OnDeleteRace($filter: ModelSubscriptionRaceFilterInput) {
    onDeleteRace(filter: $filter) {
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
export const onCreateResult = /* GraphQL */ `
  subscription OnCreateResult($filter: ModelSubscriptionResultFilterInput) {
    onCreateResult(filter: $filter) {
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
export const onUpdateResult = /* GraphQL */ `
  subscription OnUpdateResult($filter: ModelSubscriptionResultFilterInput) {
    onUpdateResult(filter: $filter) {
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
export const onDeleteResult = /* GraphQL */ `
  subscription OnDeleteResult($filter: ModelSubscriptionResultFilterInput) {
    onDeleteResult(filter: $filter) {
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
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
    onCreateUser(filter: $filter) {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
    onUpdateUser(filter: $filter) {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
    onDeleteUser(filter: $filter) {
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
export const onCreateRoster = /* GraphQL */ `
  subscription OnCreateRoster($filter: ModelSubscriptionRosterFilterInput) {
    onCreateRoster(filter: $filter) {
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
export const onUpdateRoster = /* GraphQL */ `
  subscription OnUpdateRoster($filter: ModelSubscriptionRosterFilterInput) {
    onUpdateRoster(filter: $filter) {
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
export const onDeleteRoster = /* GraphQL */ `
  subscription OnDeleteRoster($filter: ModelSubscriptionRosterFilterInput) {
    onDeleteRoster(filter: $filter) {
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
export const onCreateCommissionerMessage = /* GraphQL */ `
  subscription OnCreateCommissionerMessage(
    $filter: ModelSubscriptionCommissionerMessageFilterInput
  ) {
    onCreateCommissionerMessage(filter: $filter) {
      message
      last_edit_by
      id
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateCommissionerMessage = /* GraphQL */ `
  subscription OnUpdateCommissionerMessage(
    $filter: ModelSubscriptionCommissionerMessageFilterInput
  ) {
    onUpdateCommissionerMessage(filter: $filter) {
      message
      last_edit_by
      id
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteCommissionerMessage = /* GraphQL */ `
  subscription OnDeleteCommissionerMessage(
    $filter: ModelSubscriptionCommissionerMessageFilterInput
  ) {
    onDeleteCommissionerMessage(filter: $filter) {
      message
      last_edit_by
      id
      createdAt
      updatedAt
      __typename
    }
  }
`;
