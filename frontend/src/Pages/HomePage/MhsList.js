import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import ConfirmModal from "../../components/ConfirmModal";
const MhsList = () => {
	const [mhss, setMhs] = useState([]);

	useEffect(() => {
		getMhss();
	}, []);

	const getMhss = async () => {
		const response = await axios.get("http://localhost:5000/");
		setMhs(response.data);
		console.log(response.data)
	};

	const [value, setValue] = useState("");

	const handleSubmit = () => {
		getMhss();
	};

	return (
		<div className="column is-10 mt-4 pl-4 " style={{ "border-left": "solid hsl(0, 0%, 71%) 1px" }}>
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
									to={`/detail/${mhs.id}`}
									className="button is-small p-0 is-success mr-2"
								>
									<i class="material-icons">info</i>
								</Link>
								<Link
									to={`/mhs/${mhs.id}`}
									className="button is-small is-info p-0 mr-2"
								>
									<i class="material-icons">edit</i>
								</Link>
								<ConfirmModal
									title="Confirm"
									description="Apakah Yakin?"
									id={mhs.id}
									callbackFunction={handleSubmit}
								>
									{confirm => (
										<>
											{value}
											<button type="button  " className="button is-small is-danger p-0" onClick={confirm(handleSubmit)}>
												<i class="material-icons">delete</i>
											</button>
										</>
									)}
								</ConfirmModal>
							</td>
						</tr>
					))}
				</tbody>
			</table>

		</div>



	);
};

export default MhsList;
