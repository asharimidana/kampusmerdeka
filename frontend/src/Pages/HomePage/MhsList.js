import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const MhsList= () => {
	const [mhss, setMhs] = useState([]);

	useEffect(() => {
		getMhss();
	}, []);

	const getMhss= async () => {
		const response = await axios.get("http://localhost:5000/");
		setMhs(response.data);
		console.log(response.data)
	};

	const deleteUser = async (id) => {
		try {
			await axios.delete(`http://localhost:5000/users/${id}`);
			getMhss();
		} catch (error) {
			console.log(error);
		}
	};

	return (
			<div className="column is-10 mt-4 pl-4">
				<Link to={`mhs`} className="button is-success is-small">
					Add New
				</Link>
				<table className="table is-striped is-fullwidth">
					<thead>
						<tr>
							<th>No</th>
							<th>Nama</th>
							<th>NIM</th>
							<th>Prodi</th>
							<th>Semester</th>
							<th>Kelas</th>
							<th>Angkatan</th>
							<th>Aksi</th>
						</tr>
					</thead>
					<tbody>
						{mhss.map((mhs, index) => (
							<tr key={mhs.id}>
								<td>{index + 1}</td>
								<td>{mhs.nama}</td>
								<td>{mhs.nim}</td>
								<td>{mhs.prodi}</td>
								<td>{mhs.semester}</td>
								<td>{mhs.kelas}</td>
								<td>{mhs.angkatan}</td>
								<td>
									<Link
										to={`/mhs/${mhs.id}`}
										className="button is-small is-info mr-2"
									>
										Edit
									</Link>
									<button
										onClick={() => deleteUser(mhs.id)}
										className="button is-small is-danger"
									>
										Delete
									</button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
	);
};

export default MhsList;
