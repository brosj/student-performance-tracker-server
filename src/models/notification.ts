import mongoose from "mongoose";

const { Schema } = mongoose;

const notificationSchema = new Schema({
  title: {
    type: String,
    required: [true, "Add a notification title."],
  },
  description: {
    type: Number,
    required: [true, "Add notification description."],
  },
  date: {
    type: Date,
    default: Date.now(),
  },
  read: {
    type: Boolean,
    default: false,
  },
});

const NotificationModel = mongoose.model("notification", notificationSchema);

export default NotificationModel;
