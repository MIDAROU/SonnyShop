//IMPORTS
const fs = require("fs");
const { validationResult, check } = require("express-validator");

//EXPRESS-VALIDATOR

exports.SignUpValidator = [
	check("Name", "Enter A Valid Name!").isLength({ min: 3, max: 15 }),
	check("Name", "Name Cannot Be Empty!").notEmpty(),
	check("Email", "Enter A Valid Email!")
		.isEmail()
		.isLength({ min: 10, max: 320 }),
	check("Password", "Enter A Valid Password!").isLength({ min: 6 }),
	check("Password", "Password Can Not Be Empty!").notEmpty(),
];

exports.SignInValidator = [
	check("Email", "Enter A Valid Email!").isEmail(),
	check("Email", "Email Needs To Be Between 10 and 320 Chars").isLength({
		min: 10,
		max: 320,
	}),
	check("Password", "Enter A Valid Password! Min Of 6 Chars").isLength({
		min: 6,
	}),
	check("Password", "Password Can Not Be Empty!").notEmpty(),
];

//VALIDATION
exports.Validation = (req, res, next) => {
	const errors = validationResult(req);
	const Imgs = req.files;
	if (!errors.isEmpty()) {
		return res.status(400).json({ errors: errors.array() });
	}
	next();
};
