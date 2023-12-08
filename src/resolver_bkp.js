import bcrypt from "bcrypt";
import size from "lodash/size";

const resolvers = {
  Query: {
    async user(root, { id }) {},
    async allUsers(root) {},
  },
  Mutation: {
    async createUser(
      root,
      { fistname, lastname, email, password },
      { models }
    ) {
      console.log("createUser--->", models.User);
      return models.User.create({
        fistname,
        lastname,
        email,
        password: await bcrypt.hash(password, 10),
      });
    },

    async createUserAddress(root, { userId, address }, { ...dataSources }) {
      //   if (!size(userId)) {
      //     throw new Error("User does not exist.");
      //   }
      console.log("models---->", userId, address, dataSources);
      //   return models.
    },
  },
};

export default resolvers;
