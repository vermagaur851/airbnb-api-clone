import mongoose from "mongoose";

const ListingSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    address: { type: String, required: true },
    photos: [String],
    amenities: [String],
    price_per_night: { type: Number, required: true },
    availability: { type: Map, of: Boolean },
  },
  { timestamps: true }
);

export const List = mongoose.model("Listing", ListingSchema);