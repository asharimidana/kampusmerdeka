import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditUser = () => {
	const [nama, setName] = useState("");
	const [nim, setNim] = useState("");
	const [prodi, setProdi] = useState("");
	const [semester, setSemester] = useState("");
	const [kelas, setKelas] = useState("");
	const [angkatan, setAngkatan] = useState("");
	// const [email, setEmail] = useState("");
	// const [gender, setGender] = useState("Male");
	const navigate = useNavigate();
	const { id } = useParams();

	useEffect(() => {
		getUserById();
	}, []);

	const updateUser = async (e) => {
		e.preventDefault();
		try {
			await axios.patch(`http://localhost:5000/mhs/${id}`, {
				nama,
			});
			navigate("/");
		} catch (error) {
			console.log(error);
		}
	};

	const getUserById = async () => {
		const response = await axios.get(`http://localhost:5000/mhs/${id}`);
		setName(response.data.nama);
		setNim(response.data.nim);
		setProdi(response.data.prodi);
		setSemester(response.data.semester);
		setKelas(response.data.kelas);
		setAngkatan(response.data.angkatan);
	};

	return (
		<div className="columns mt-5 is-centered">
			<div className="column is-half">
				<form onSubmit={updateUser}>
					<div className="field">
						<label className="label">Name</label>
						<div className="control">
							<input
								type="text"
								className="input"
								value={nama}
								onChange={(e) => setName(e.target.value)}
								placeholder="Name"
							/>
						</div>
					</div>
					<div className="field">
						<label className="label">NIM</label>
						<div className="control">
							<input
								type="text"
								className="input"
								value={nim}
								onChange={(e) => setNim(e.target.value)}
								placeholder="Name"
							/>
						</div>
					</div>
					<div className="field">
						<label className="label">NIM</label>
						<div className="control">
							<input
								type="text"
								className="input"
								value={prodi}
								onChange={(e) => setProdi(e.target.value)}
								placeholder="Name"
							/>
						</div>
					</div>
					<div className="field">
						<label className="label">NIM</label>
						<div className="control">
							<input
								type="text"
								className="input"
								value={semester}
								onChange={(e) => setSemester(e.target.value)}
								placeholder="Name"
							/>
						</div>
					</div>
					<div className="field">
						<label className="label">NIM</label>
						<div className="control">
							<input
								type="text"
								className="input"
								value={kelas}
								onChange={(e) => setKelas(e.target.value)}
								placeholder="Name"
							/>
						</div>
					</div>
					<div className="field">
						<label className="label">NIM</label>
						<div className="control">
							<input
								type="text"
								className="input"
								value={angkatan}
								onChange={(e) => setAngkatan(e.target.value)}
								placeholder="Name"
							/>
						</div>
					</div>
					<div className="field">
						<button type="submit" className="button is-success">
							Update
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default EditUser;
