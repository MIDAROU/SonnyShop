import { faAt, faKey } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import "../Css/SignIn.css";
import { signInAction } from "../Redux/actions/actions";

function SignIn() {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const [Email, setEmail] = useState("");
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
		<main id="SignIn">
			<div id="Img">
				<img
					src={`${process.env.PUBLIC_URL}/Images/SignIn.png`}
					alt="SignInImg"
				/>
			</div>
			<div id="Container">
				<h1>Sign In</h1>
				<form action="" method="post">
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
							dispatch(signInAction({ Email, Password }, navigate));
						}}
					>
						Login
					</button>
				</form>
				<p>
					Dont Have An Account ? <Link to="/SignUp">Sign Up</Link>
				</p>
			</div>
		</main>
	);
}

export default SignIn;
