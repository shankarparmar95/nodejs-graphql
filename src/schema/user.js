import { gql } from "apollo-server-express";

export default gql`
  type User {
    id: Int!
    firstname: String!
    lastname: String!
    email: String!
    mobile_number: String!
  }

  extend type Query {
    user(id: Int!): User!
    allUsers: [User!]
  }

  extend type Mutation {
    createUser(
      fistname: String!
      lastname: String!
      email: String!
      password: String!
    ): User!
  }
`;
