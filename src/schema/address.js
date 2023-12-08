import { gql } from "apollo-server-express";

export default gql`
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

  extend type Mutation {
    createUserAddress(userId: Int!, address: AddressInput!): Address!
  }
`;
