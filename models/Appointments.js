import { Schema, model, models } from "mongoose";

const newUserSchema = new Schema({
  userName: String,
  phone: String,
  petName: String,
  petAge: String,
  petBirthDate: String,
  petType: String,
});

const Users = models.users || model("users", newUserSchema);

export default Users;
