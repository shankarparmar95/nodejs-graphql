import mongooses from "mongoose";
import User from "./user";
// import Address from "./address";

const connectMongo = () => {
  return mongooses.connect(process.env.MONGO_URL);
};

const models = { User };
// const models = { User, Address };

export { connectMongo as connectDb };

export default models;
