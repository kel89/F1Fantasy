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
export const onUpdateDriver = /* GraphQL */ `
  subscription OnUpdateDriver($filter: ModelSubscriptionDriverFilterInput) {
    onUpdateDriver(filter: $filter) {
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
export const onDeleteDriver = /* GraphQL */ `
  subscription OnDeleteDriver($filter: ModelSubscriptionDriverFilterInput) {
    onDeleteDriver(filter: $filter) {
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
export const onCreateRace = /* GraphQL */ `
  subscription OnCreateRace($filter: ModelSubscriptionRaceFilterInput) {
    onCreateRace(filter: $filter) {
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
export const onUpdateRace = /* GraphQL */ `
  subscription OnUpdateRace($filter: ModelSubscriptionRaceFilterInput) {
    onUpdateRace(filter: $filter) {
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
export const onDeleteRace = /* GraphQL */ `
  subscription OnDeleteRace($filter: ModelSubscriptionRaceFilterInput) {
    onDeleteRace(filter: $filter) {
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
      }
      createdAt
      updatedAt
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
      }
      createdAt
      updatedAt
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
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateRoster = /* GraphQL */ `
  subscription OnCreateRoster($filter: ModelSubscriptionRosterFilterInput) {
    onCreateRoster(filter: $filter) {
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
export const onUpdateRoster = /* GraphQL */ `
  subscription OnUpdateRoster($filter: ModelSubscriptionRosterFilterInput) {
    onUpdateRoster(filter: $filter) {
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
export const onDeleteRoster = /* GraphQL */ `
  subscription OnDeleteRoster($filter: ModelSubscriptionRosterFilterInput) {
    onDeleteRoster(filter: $filter) {
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
export const onCreateChangeAllowed = /* GraphQL */ `
  subscription OnCreateChangeAllowed(
    $filter: ModelSubscriptionChangeAllowedFilterInput
  ) {
    onCreateChangeAllowed(filter: $filter) {
      allowed
      id
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateChangeAllowed = /* GraphQL */ `
  subscription OnUpdateChangeAllowed(
    $filter: ModelSubscriptionChangeAllowedFilterInput
  ) {
    onUpdateChangeAllowed(filter: $filter) {
      allowed
      id
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteChangeAllowed = /* GraphQL */ `
  subscription OnDeleteChangeAllowed(
    $filter: ModelSubscriptionChangeAllowedFilterInput
  ) {
    onDeleteChangeAllowed(filter: $filter) {
      allowed
      id
      createdAt
      updatedAt
    }
  }
`;
export const onCreateRosterDrivers = /* GraphQL */ `
  subscription OnCreateRosterDrivers(
    $filter: ModelSubscriptionRosterDriversFilterInput
  ) {
    onCreateRosterDrivers(filter: $filter) {
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
export const onUpdateRosterDrivers = /* GraphQL */ `
  subscription OnUpdateRosterDrivers(
    $filter: ModelSubscriptionRosterDriversFilterInput
  ) {
    onUpdateRosterDrivers(filter: $filter) {
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
export const onDeleteRosterDrivers = /* GraphQL */ `
  subscription OnDeleteRosterDrivers(
    $filter: ModelSubscriptionRosterDriversFilterInput
  ) {
    onDeleteRosterDrivers(filter: $filter) {
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
export const onCreateRaceDrivers = /* GraphQL */ `
  subscription OnCreateRaceDrivers(
    $filter: ModelSubscriptionRaceDriversFilterInput
  ) {
    onCreateRaceDrivers(filter: $filter) {
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
export const onUpdateRaceDrivers = /* GraphQL */ `
  subscription OnUpdateRaceDrivers(
    $filter: ModelSubscriptionRaceDriversFilterInput
  ) {
    onUpdateRaceDrivers(filter: $filter) {
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
export const onDeleteRaceDrivers = /* GraphQL */ `
  subscription OnDeleteRaceDrivers(
    $filter: ModelSubscriptionRaceDriversFilterInput
  ) {
    onDeleteRaceDrivers(filter: $filter) {
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
