const mongoose = require('mongoose');

const OrderSchema = mongoose.Schema(
   {
      userId: { type: String, require: true },
      products: {
         productId: { type: String },
         quantity: { type: Number, default: 1 },
      },
      amount: { type: Number, require: true },
      adress: { type: Object, require: true },
      status: { type: String, default: 'pending' },
   },
   { timestamps: true }
);

module.exports = mongoose.model('Order', OrderSchema);
