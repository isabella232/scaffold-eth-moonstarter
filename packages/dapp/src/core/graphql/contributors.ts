import { gql } from "@apollo/client";

export const JOIN_AS_CONTRIBUTOR_MUTATION = gql`
  mutation JoinAsContributor($input: JoinAsContributorInput!) {
    joinAsContributor(input: $input) {
      did
      githubUsername
    }
  }
`;

export const GET_ALL_CONTRIBUTORS_QUERY = gql`
  query GetAllContributors {
    getAllContributors {
      did
      githubUsername
    }
  }
`;
