//IMPORTS
const mongoose = require("mongoose");

//SCHEMA
const User = new mongoose.Schema(
	{
		Name: {
			type: String,
			required: true,
			trim: true,
		},

		Email: {
			type: String,
			required: true,
			unique: true,
			trim: true,
		},
		Password: {
			type: String,
			required: true,
			trim: true,
		},
		Location: {
			type: String,
			trim: true,
		},
		PhoneNumber: {
			type: Number,
			required: true,
		},
		Orders: {
			type: String,
		},
		Role: { type: String, required: true },
	},
	{
		timestamps: true,
	}
);

//MODEL //EXPORTS
module.exports = mongoose.model("Users", User);
