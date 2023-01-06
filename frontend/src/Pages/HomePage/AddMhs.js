import React, { useState } from "react";
import axios from "axios";
import { useNavigate  } from "react-router-dom";

const AddMhs = () => {
	const [nama, setName] = useState("");
	const [nim, setNim] = useState("");
	const [prodi, setProdi] = useState("");
	const [semester, setSemester] = useState("");
	const [kelas, setKelas] = useState("");
	const [angkatan, setAngkatan] = useState("");
	const [mhId, setMhid] = useState(30);
	const navigate = useNavigate();


	const saveMhs = async (e) => {
		e.preventDefault();
		try {
			 await axios.post(`http://localhost:5000/mhs/`, {
				nama,
				nim,
				prodi,
				semester,
				kelas,
				angkatan,
			});
			navigate("/");
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className="columns mt-5 is-centered">
			<div className="column is-half">
				<form onSubmit={saveMhs}>
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
								placeholder="Nim"
							/>
						</div>
					</div>
					<div className="field">
						<label className="label">Prodi</label>
						<div className="control">
							<input
								type="text"
								className="input"
								value={prodi}
								onChange={(e) => setProdi(e.target.value)}
								placeholder="Prodi"
							/>
						</div>
					</div>
					<div className="field">
						<label className="label">Semester</label>
						<div className="control">
							<input
								type="number"
								className="input"
								value={semester}
								onChange={(e) => setSemester(e.target.value)}
								placeholder="Semester"
							/>
						</div>
					</div>
					<div className="field">
						<label className="label">Kelas</label>
						<div className="control">
							<input
								type="text"
								className="input"
								value={kelas}
								onChange={(e) => setKelas(e.target.value)}
								placeholder="Kelas"
							/>
						</div>
					</div>
					<div className="field">
						<label className="label">Angkatan</label>
						<div className="control">
							<input
								type="number"
								className="input"
								value={angkatan}
								onChange={(e) => setAngkatan(e.target.value)}
								placeholder="Angkatan"
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

export default AddMhs;
