import { gql } from 'graphql-tag'

const CREATE_ISSUE = gql`
  mutation createIssue($title: String!, $description: String!) {
    createIssue(input: { title: $title, description: $description }) {
      success
      error
      issue {
        id
        title
        description
      }
    }
  }
`;

const UPDATE_ISSUE = gql`
  mutation updateIssue($id: Int!, $title: String!, $description: String!) {
    updateIssue(input: { id: $id, title: $title, description: $description }) {
      success
      error
      issue {
        id
        title
        description
      }
    }
  }
`;

const DELETE_ISSUE = gql`
  mutation deleteIssue($id: Int!) {
    deleteIssue(input: { id: $id }) {
      success
      error
    }
  }
`;

export { CREATE_ISSUE, UPDATE_ISSUE, DELETE_ISSUE }