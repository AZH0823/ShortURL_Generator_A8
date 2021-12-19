const mongoose = require("mongoose")
const Schema = mongoose.Schema

const urlchema = new Schema({
  shortURL: { type: String, required: true },
  originalURL: { type: String, required: true },
})

console.log('create Suceess!!')
module.exports = mongoose.model("URList", urlchema)