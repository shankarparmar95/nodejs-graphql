import { GraphQLDateTime } from "graphql-iso-date";
import userResolver from "./user";
// import addressResolver from "../schema/address";

const customScalarResolver = {
  Date: GraphQLDateTime,
};

export default [customScalarResolver, userResolver];
// export default [customScalarResolver, userResolver, addressResolver];
