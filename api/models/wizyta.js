const mongoose = require("mongoose");

const wizytaSchema = mongoose.Schema({
    _id: mongoose.Types.ObjectId,
    Numer: String,
    Date: String,
    Type_of_Appointment:String
});

module.exports = mongoose.model("Wizyta", wizytaSchema);