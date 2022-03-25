//IMPORTS
const express = require("express");
const UserSchema = require("../Models/UserSchema");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const {
	SignUpValidator,
	Validation,
	SignInValidator,
} = require("../middleware/validation");
const { isAuth } = require("../middleware/AuthMiddleware");

//POST USER SIGNUP
router.post("/signUp", SignUpValidator, Validation, async (req, res) => {
	const { Name, Email, Password, PhoneNumber } = req.body;
	try {
		const EmailExists = await UserSchema.findOne({ Email });
		const NumberExists = await UserSchema.findOne({ PhoneNumber });
		if (EmailExists) {
			return res
				.status(400)
				.send({ errors: [{ param: "Email", msg: "Email Already Exists!" }] });
		}
		if (NumberExists) {
			return res.status(400).send({
				errors: [{ param: "PhoneNumber", msg: "Number Already Exists " }],
			});
		}
		const NewUser = new UserSchema({ Name, Email, PhoneNumber });

		NewUser.Role = "User";
		//BCRYPT
		const salt = 10;
		const hashedPassword = bcrypt.hashSync(Password, salt);
		NewUser.Password = hashedPassword;

		//JSONWEBTOKEN
		const payload = { id: NewUser._id };
		const Token = jwt.sign(payload, process.env.SecretOrKey, {
			expiresIn: "3d",
		});

		await NewUser.save();
		res
			.status(200)
			.send({ success: [{ msg: "Sign Up Succesful" }], User: NewUser, Token });
	} catch (error) {
		res.status(500).send({ errors: [{ msg: "Could Not Sign Up" }, error] });
	}
});

//POST USER SIGNIN

router.post("/signIn", SignInValidator, Validation, async (req, res) => {
	const { Email, Password } = req.body;
	try {
		const found = await UserSchema.findOne({ Email });
		if (!found) {
			return res
				.status(400)
				.send({ errors: [{ param: "Email", msg: "Wrong Email !" }] });
		}

		const match = bcrypt.compareSync(Password, found.Password);
		if (!match) {
			return res
				.status(400)
				.send({ errors: [{ param: "Password", msg: "Wrong Password !" }] });
		}

		//JSONWEBTOKEN
		const payload = { id: found._id };
		const Token = jwt.sign(payload, process.env.SecretOrKey);
		res
			.status(200)
			.send({ success: [{ msg: "Login Succesful" }], found, Token });
	} catch (error) {
		res.status(500).send({ errors: [{ msg: "Could Not Sign In" }] });
	}
});

//GET CURRENT USER METHOD

router.get("/current", isAuth, (req, res) => {
	res.send(req.user);
});

module.exports = router;
