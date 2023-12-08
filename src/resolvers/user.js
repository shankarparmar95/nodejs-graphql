export default {
  Query: {
    user: async (parent, args, { models }) => {
      return await models.User.find();
    },
    allUsers: async (parent, { id }, { models }) => {
      return await models.User.findById(id);
    },
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
        password,
      });
    },
  },
};
