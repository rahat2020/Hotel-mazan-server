const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema(
  {
    email: { type: String, required: true },
    product:[String],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Order", OrderSchema);
