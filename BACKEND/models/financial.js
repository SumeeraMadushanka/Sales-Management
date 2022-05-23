const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Financial = new Schema({
  month: {
    type: String,
  },
  revenue: {
    type: Number,
  },
  expenditure: {
    type: Number,
  },
  description: {
    type: String,
  },
  financialValue: {
    type: Number,
  },
  profitOrLoss: {
    type: Number,
  },
});

const newFinancial = mongoose.model("financial", Financial); //create database collection

module.exports = newFinancial;
