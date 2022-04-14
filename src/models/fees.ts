import mongoose from "mongoose";
const { Schema } = mongoose;

const feesSchema = new Schema(
  {
    class: {
      type: String,
      required: [true, "Class is required."],
    },
    amount: {
      type: Number,
      required: [true, "Fee amount is required."],
    },
    dueDate: {
      type: Date,
      required: [true, "Fee due date is required."],
    },
  }
);

const Fees_catalogue = mongoose.model("fees_catalogue", feesSchema);

export default Fees_catalogue;
