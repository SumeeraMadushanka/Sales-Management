const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Sales = new Schema({
  month: {
    type: String,
  },
  week: {
    type: Number,
  },
  vehicleName: {
    type: String,
  },
  rentealNumber: {
    type: String,
  },
  vehicaleNumber: {
    type: String,
  },
  noOfKm: {
    type: Number,
  },
  payment: {
    type: Number,
  },
  numberOfdays: {
    type: Number,
  },
  revenue: {
    type: Number,
  },
});

const newSales = mongoose.model("sales", Sales); //create database collection

module.exports = newSales;
