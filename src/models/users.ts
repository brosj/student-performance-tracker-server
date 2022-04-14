import mongoose from "mongoose";
const { Schema } = mongoose;

const usersSchema = new Schema(
  {
    email: {
      type: String,
      required: [true, "Email is required."],
    },
    password: {
      type: String,
      default: "",
    }
  }
);

const UserLogin = mongoose.model("user", usersSchema);

export default UserLogin;
