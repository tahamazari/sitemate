import { gql } from 'graphql-tag'

const FETCH_ISSUES = gql`
  query issues {
    issues {
      id
      title
      description
    }
  }
`;

const FETCH_ISSUE = gql`
  query issue($id: Int!) {
    issue(input: { id: $id }) {
      id
      title
      description
    }
  }
`;

export { FETCH_ISSUES, FETCH_ISSUE }