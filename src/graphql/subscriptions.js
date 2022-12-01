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
      createdAt
      updatedAt
      raceDriversId
      raceResultsId
      rosterDriversId
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
      createdAt
      updatedAt
      raceDriversId
      raceResultsId
      rosterDriversId
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
      createdAt
      updatedAt
      raceDriversId
      raceResultsId
      rosterDriversId
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
      Results {
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
      Results {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
    onCreateUser(filter: $filter) {
      id
      name
      Leagues {
        id
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      leagueUsersId
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
    onUpdateUser(filter: $filter) {
      id
      name
      Leagues {
        id
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      leagueUsersId
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
    onDeleteUser(filter: $filter) {
      id
      name
      Leagues {
        id
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      leagueUsersId
    }
  }
`;
export const onCreateLeague = /* GraphQL */ `
  subscription OnCreateLeague($filter: ModelSubscriptionLeagueFilterInput) {
    onCreateLeague(filter: $filter) {
      id
      users {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateLeague = /* GraphQL */ `
  subscription OnUpdateLeague($filter: ModelSubscriptionLeagueFilterInput) {
    onUpdateLeague(filter: $filter) {
      id
      users {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteLeague = /* GraphQL */ `
  subscription OnDeleteLeague($filter: ModelSubscriptionLeagueFilterInput) {
    onDeleteLeague(filter: $filter) {
      id
      users {
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
      createdAt
      updatedAt
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
      createdAt
      updatedAt
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
      createdAt
      updatedAt
    }
  }
`;
