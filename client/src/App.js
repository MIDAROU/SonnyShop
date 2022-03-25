import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import SignIn from "./Components/SignIn";
import SignUp from "./Components/SignUp";
import "./Css/App.css";

function App() {
	return (
		<div className="App">
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/SignIn" element={<SignIn />} />
				<Route path="/SignUp" element={<SignUp />} />
			</Routes>
		</div>
	);
}

export default App;
