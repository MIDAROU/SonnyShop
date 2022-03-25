//IMPORTS
const mongoose = require("mongoose");
const dotenv = require("dotenv");

//DONTENV
dotenv.config();

//CONNECT TO DATABASE
const ConnectDB = async () => {
	try {
		await mongoose.connect(process.env.URI);
		console.log("DATABASE CONNECTED");
	} catch (error) {
		console.log(error);
	}
};

//EXPORTS
module.exports = ConnectDB;
