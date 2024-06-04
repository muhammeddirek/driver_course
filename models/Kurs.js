import mongoose, { Schema, models } from "mongoose";

const kursSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    kursAdi: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Kurs = models.Kurs || mongoose.model("Kurs", kursSchema);
export default Kurs;
