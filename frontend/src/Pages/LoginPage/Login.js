import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState(false);

	const navigate = useNavigate();

	const loginUser = async (e) => {
		e.preventDefault();
		try {
			const logg = await axios.post(`http://localhost:5000/login/`, {
				email,
				password
			});
			console.log(logg.data.token)
			navigate("/");
		} catch (error) {
			setError(true)
		}
	};

	return (
		<div className="mt-5 is-centered">
			<div className="columns is-2 is-centered mt-6 mb-4">
				<>
					<img alt="logo" className="has-text-centered	 is-centered" style={{ "height": "100px" }} src="https://hasnurcentre.org/wp-content/uploads/2019/08/YHC-2019.png" />
				</>
			</div>

			<div className="columns ">
				<div className="column is-4 "></div>
				<div className="column is-4 is-centered px-6">
					{error ? <div className="notification is-danger-light has-text-danger mb-1" style={{ "background-color": "hsl(347, 90%, 96%)" }}>
						Email dan Pasword Salah!!
						<button className="delete" onClick={() => setError(!error)}>Toggle</button>
					</div> : null}

					<form onSubmit={loginUser} style={{ "width": "100%" }}>
						<div className="field">
							<label className="label">email</label>
							<div className="control">
								<input
									type="text"
									className="input"
									placeholder="Email"
									value={email}
									onChange={(e) => setEmail(e.target.value)}
									required
								/>
							</div>
						</div>
						<div className="field">
							<label className="label">Password</label>
							<div className="control">
								<input
									type="text"
									className="input"
									placeholder="Password"
									value={password}
									onChange={(e) => setPassword(e.target.value)}
									required
								/>
							</div>
						</div>
						<div className="field">
							<button type="submit" className="button is-success">
								Login
							</button>
						</div>
					</form>
				</div>
				<div className="column is-4">
				</div>
			</div>
		</div>
	);
};

export default Login;
