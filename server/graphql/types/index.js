const { gql } = require('apollo-server-express');

module.exports = gql`
    type Issue {
        id: Int!
        title: String!
        description: String!
    }

    type Query {
      issues: [Issue]
      issue(input: IssueInput!): Issue
    }

    type Mutation {
      createIssue(input: CreateIssueInput!): CreateIssuePayload
      updateIssue(input: UpdateIssueInput!): UpdateIssuePayload
      deleteIssue(input: DeleteIssueInput!): DeleteIssuePayload
    }

    input IssueInput {
      id: Int!
    }

    input CreateIssueInput {
      title: String!
      description: String!
    }

    input UpdateIssueInput {
      id: Int!
      title: String
      description: String
    }

    input DeleteIssueInput {
      id: Int!
    }

    type CreateIssuePayload {
      success: Boolean
      error: String
      issue: Issue
    }

    type UpdateIssuePayload {
      success: Boolean
      error: String
      issue: Issue
    }

    type DeleteIssuePayload {
      success: Boolean
      error: String
    }
`