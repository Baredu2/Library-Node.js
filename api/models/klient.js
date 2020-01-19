const mongoose = require("mongoose");

const klientSchema = mongoose.Schema({
    _id: mongoose.Types.ObjectId,
    name: String,
    surname: String,
    Numer_tel: Number
});

module.exports = mongoose.model("Klient", klientSchema);