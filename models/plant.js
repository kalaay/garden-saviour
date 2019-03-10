const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const plantSchema = new Schema({
    owner: { type: String, required: true },
    address: { type: String, required: true },
    layout: String,
    created: { type: Date, default: Date.now },
    sensors: [
        {
            type: Schema.Types.ObjectId,
            ref: "Sensor"
        }
    ]
});

const Plant = mongoose.model("Plant", plantSchema);

module.exports = Plant;

