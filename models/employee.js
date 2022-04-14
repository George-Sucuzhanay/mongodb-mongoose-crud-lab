const mongoose = require("mongoose")

const Schema = mongoose.Schema;

const AddressSchema = new mongoose.Schema(
    {
        street: {type: String, require: true},
        city: {type: String, require: true},
        state: {type: String, require: true},
        zip: {type: String, require: true}
    }
)
const Employee = new Schema(
    {
        first_name: {type: String, require: true},
        last_name: {type: String, require: true},
        email: {type: String, require: true},
        job_title: {type: String, require: true},
        address: AddressSchema
    },
    {timestamps: true}
)

module.exports = mongoose.model("employees", Employee)