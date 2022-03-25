import {
	faAt,
	faKey,
	faPhone,
	faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../Css/SignUp.css";
import { signUpAction } from "../Redux/actions/actions";

function SignUp() {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const [Name, setName] = useState("");
	const [Email, setEmail] = useState("");
	const [PhoneNumber, setPhoneNumber] = useState("");
	const [Password, setPassword] = useState("");

	const Errors = useSelector((state) => state.UserReducer.Errors);

	const filterErros = (Param) => {
		if (Errors) {
			const filterd = [
				Errors.find((el) => {
					return el.param === Param;
				}),
			];
			if (filterd && filterd[0]) {
				return filterd[0].msg;
			}
			return null;
		}
		return null;
	};

	return (
		<main id="SignUp">
			<div id="Img">
				<img
					src={`${process.env.PUBLIC_URL}/Images/SignIn.png`}
					alt="SignUpImg"
				/>
			</div>
			<div id="Container">
				<h1>Sign Up</h1>
				<form action="" method="post">
					<span style={{ whiteSpace: "nowrap" }}>
						<label htmlFor="Name">
							<FontAwesomeIcon icon={faUser} />
						</label>
						<input
							id="Name"
							type="Name"
							placeholder="Name..."
							value={Name}
							onChange={(e) => setName(e.target.value)}
						/>
						<h4>{Errors && filterErros("Name")}</h4>
					</span>
					<span style={{ whiteSpace: "nowrap" }}>
						<label htmlFor="Email">
							<FontAwesomeIcon icon={faAt} />
						</label>
						<input
							id="Email"
							type="Email"
							placeholder="Email..."
							value={Email}
							onChange={(e) => setEmail(e.target.value)}
						/>
						<h4>{Errors && filterErros("Email")}</h4>
					</span>
					<span style={{ whiteSpace: "nowrap" }}>
						<label htmlFor="PhoneNumber">
							<FontAwesomeIcon icon={faPhone} />
						</label>
						<input
							id="PhoneNumber"
							type="PhoneNumber"
							placeholder="PhoneNumber..."
							value={PhoneNumber}
							onChange={(e) => setPhoneNumber(e.target.value)}
						/>
						<h4>{Errors && filterErros("PhoneNumber")}</h4>
					</span>
					<span style={{ whiteSpace: "nowrap" }}>
						<label htmlFor="Password">
							<FontAwesomeIcon icon={faKey} />
						</label>
						<input
							id="Password"
							type="Password"
							placeholder="Password..."
							value={Password}
							onChange={(e) => setPassword(e.target.value)}
						/>
						<h4>{Errors && filterErros("Password")}</h4>
					</span>
					<button
						onClick={(e) => {
							e.preventDefault();
							dispatch(
								signUpAction({ Name, Email, Password, PhoneNumber }, navigate)
							);
						}}
					>
						Register
					</button>
				</form>
				<p>
					Already Have An Account ? <Link to="/SignIn">Sign In</Link>
				</p>
			</div>
		</main>
	);
}

export default SignUp;
