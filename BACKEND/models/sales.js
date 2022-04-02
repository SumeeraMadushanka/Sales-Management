const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Sales = new Schema({
  month: {
    type: String,
  },
  week: {
    type: Number,
  },
  vName: {
    type: String,
  },
  rNumber: {
    type: String,
  },
  vNumber: {
    type: String,
  },
  numberOfkm: {
    type: Number,
  },
  payment: {
    type: Number,
  },
  numberOfday: {
    type: Number,
  },
  revenue: {
    type: Number,
  },
});

const newSales = mongoose.model("sale", Sales); //create database collection

module.exports = newSales;
