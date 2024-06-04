import mongoose, { Schema, models } from "mongoose";

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    surName: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    salary: {
      type: String,
    },
    job: {
      type: String,
    },
    phone: {
      type: String,
      required: true,
    },
    dersKod: {
      type: Number
    },
    kursID: {
      type: Number
    },
    personelID: {
      type: Number
    },
    ehliyetID: {
      type: Number
    },
    isAdmin: {
      type: Boolean,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    }
  },
  { timestamps: true }
);

const User = models.User || mongoose.model("User", userSchema);
export default User;
