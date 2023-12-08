import { gql } from "apollo-server-express";

const typeDef = gql`
  type User {
    id: Int!
    firstname: String!
    lastname: String!
    email: String!
    mobile_number: String!
    addresss: [Address!]
  }

  type Address {
    id: Int!
    firstname: String!
    lastnae: String!
    street: String!
    city: String!
    state: String!
    country: String!
    telephone: String!
    postcode: String!
  }

  input AddressInput {
    firstname: String!
    lastname: String!
    street: String!
    city: String!
    state: String!
    country: String!
    telephone: String!
    postcode: String!
  }

  type Query {
    user(id: Int!): User!
    allUsers: [User!]
  }

  type Mutation {
    createUser(
      fistname: String!
      lastname: String!
      email: String!
      password: String!
    ): User!
    createUserAddress(userId: Int!, address: AddressInput!): Address!
  }
`;

export default typeDef;
