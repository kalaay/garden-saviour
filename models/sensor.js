const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const sensorSchema = new Schema({
    name: { type: String, required: true, unique: true },
    type: { type: String, required: true },
    description: String,
    location: { type: String, default: "In-House" },
    value: { type: Number, default: 0 },
    unit: { type: String, default: "" },
    created: { type: Date, default: Date.now }
});

const Sensor = mongoose.model("Sensor", sensorSchema);

module.exports = Sensor;

