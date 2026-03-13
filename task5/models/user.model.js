import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  full_name: {
    type: String,
    required:true,
    minLength:[3,"Invalid username"]
  },
  email: {
    type: String,
    required:true,
    unique:true,
  },
  password: {
    type: String,
    required:true,
    minLength:[8,"password is not strong"]
  },
});

const Users = mongoose.model("User", UserSchema);
export default Users;