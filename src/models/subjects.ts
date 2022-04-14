import mongoose from "mongoose";
const { Schema } = mongoose;

const subjectsSchema = new Schema(
  {
    class: {
      type: String,
      required: [true, "Class is required."],
    },
    subjects: {
      type: Array,
      required: [true, "Add class subjects."],
    },
  }
);

const Subject_catalogue = mongoose.model("subject_catalogue", subjectsSchema);

export default Subject_catalogue;
