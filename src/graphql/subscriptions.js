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
export const onUpdateDriver = /* GraphQL */ `
  subscription OnUpdateDriver($filter: ModelSubscriptionDriverFilterInput) {
    onUpdateDriver(filter: $filter) {
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
export const onDeleteDriver = /* GraphQL */ `
  subscription OnDeleteDriver($filter: ModelSubscriptionDriverFilterInput) {
    onDeleteDriver(filter: $filter) {
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
export const onCreateRace = /* GraphQL */ `
  subscription OnCreateRace($filter: ModelSubscriptionRaceFilterInput) {
    onCreateRace(filter: $filter) {
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
export const onUpdateRace = /* GraphQL */ `
  subscription OnUpdateRace($filter: ModelSubscriptionRaceFilterInput) {
    onUpdateRace(filter: $filter) {
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
export const onDeleteRace = /* GraphQL */ `
  subscription OnDeleteRace($filter: ModelSubscriptionRaceFilterInput) {
    onDeleteRace(filter: $filter) {
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
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
    onCreateUser(filter: $filter) {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
    onUpdateUser(filter: $filter) {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
    onDeleteUser(filter: $filter) {
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
export const onCreateLeague = /* GraphQL */ `
  subscription OnCreateLeague($filter: ModelSubscriptionLeagueFilterInput) {
    onCreateLeague(filter: $filter) {
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
export const onUpdateLeague = /* GraphQL */ `
  subscription OnUpdateLeague($filter: ModelSubscriptionLeagueFilterInput) {
    onUpdateLeague(filter: $filter) {
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
export const onDeleteLeague = /* GraphQL */ `
  subscription OnDeleteLeague($filter: ModelSubscriptionLeagueFilterInput) {
    onDeleteLeague(filter: $filter) {
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
export const onCreateRoster = /* GraphQL */ `
  subscription OnCreateRoster($filter: ModelSubscriptionRosterFilterInput) {
    onCreateRoster(filter: $filter) {
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
export const onUpdateRoster = /* GraphQL */ `
  subscription OnUpdateRoster($filter: ModelSubscriptionRosterFilterInput) {
    onUpdateRoster(filter: $filter) {
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
export const onDeleteRoster = /* GraphQL */ `
  subscription OnDeleteRoster($filter: ModelSubscriptionRosterFilterInput) {
    onDeleteRoster(filter: $filter) {
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
export const onCreateUserLeagues = /* GraphQL */ `
  subscription OnCreateUserLeagues(
    $filter: ModelSubscriptionUserLeaguesFilterInput
  ) {
    onCreateUserLeagues(filter: $filter) {
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
export const onUpdateUserLeagues = /* GraphQL */ `
  subscription OnUpdateUserLeagues(
    $filter: ModelSubscriptionUserLeaguesFilterInput
  ) {
    onUpdateUserLeagues(filter: $filter) {
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
export const onDeleteUserLeagues = /* GraphQL */ `
  subscription OnDeleteUserLeagues(
    $filter: ModelSubscriptionUserLeaguesFilterInput
  ) {
    onDeleteUserLeagues(filter: $filter) {
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
