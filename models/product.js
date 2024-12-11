import mongoose from "mongoose";
const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name cannot be empty!"],
  },
  price: {
    type: Number,
    required: [true, "Price cannot be empty!"],
  },
  featured: {
    type: Boolean,
    default: false,
  },
  rating: {
    type: Number,
    default: 4.5,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  company: {
    type: String,
    enum: {
      values: [
        "soundcore",
        "samsung",
        "apple",
        "razer",
        "bose",
        "google",
        "roomba",
        "benq",
        "nest",
        "fitbit",
        "anker",
        "arlo",
        "sony",
        "garmin",
        "mophie",
        "amazon",
        "logitech",
        "canon",
        "seagate",
        "asus",
        "philips",
        "oral-b",
      ],
      message: "{VALUE} is not supported",
    },
  },
});

export default mongoose.model("Product", productSchema);
