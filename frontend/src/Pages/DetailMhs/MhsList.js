import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate, useParams } from "react-router-dom";

const MhsList = () => {
	const [nama, setName] = useState("");
	const [nim, setNim] = useState("");
	const [prodi, setProdi] = useState("");
	const [semester, setSemester] = useState("");
	const [kelas, setKelas] = useState("");
	const [angkatan, setAngkatan] = useState("");

	const [nik, setNik] = useState("");
	const [tempat, setTlahir] = useState("");
	const [tgl, setTgl] = useState("");
	const [hp, setHp] = useState("");
	const [jk, setJk] = useState("");
	const [agama, setAgama] = useState("");
	const [wna, setWna] = useState("");
	const [nisn, setNisn] = useState("");
	const [baju, setBaju] = useState("");


	const navigate = useNavigate();
	const { id } = useParams();
	useEffect(() => {
		getUserById();
		createDetail()
		getDetailByMhid()
	}, []);

	const createDetail = async (e) => {
		try {
			const mhId_check = await axios.get(`http://localhost:5000/detail/${id}`);
		} 
		catch (error) {
			await axios.post(`http://localhost:5000/detail/`, {
				mhId:id 
			});
		};
	};

	const getUserById = async () => {
		try {
			const response = await axios.get(`http://localhost:5000/mhs/${id}`);
			setName(response.data.nama);
			setNim(response.data.nim);
			setProdi(response.data.prodi);
			setSemester(response.data.semester);
			setKelas(response.data.kelas);
			setAngkatan(response.data.angkatan);
		} catch (error) {

		}
	};
	const getDetailByMhid = async () => {
		try {
			const response = await axios.get(`http://localhost:5000/detail/${id}`);
			setNik(response.data.nik);
			setTlahir(response.data.tempa_lhr);
			setTgl(response.data.tgl);
			setHp(response.data.hp);
			setJk(response.data.jk);
			setAgama(response.data.agama);
			setWna(response.data.wna);
			setNisn(response.data.nisn);
			setBaju(response.data.Ukuran_baju);
	
		} catch  {
			// createDetail()
		}
	};
	return (
		<div className="column is-10 mt-4 pl-4" style={{ "border-left": "solid hsl(0, 0%, 71%) 1px" }}>
			{/*<Link to={`mhs`} className="button is-success is-small">
				Add New
			</Link>
			*/}
			<div className="column mr-2  mt-2 has-text-success notification " style={{ "background-color": "hsl(142, 52%, 96%)" }}>
				1) Data Biodata, harus diisi lengkap dan benar, untuk keperluan pendaftaran data anda ke data Kementerian Pendidikan dan Kebudayaan,
				<><br /></>
				2) Perbaikan data yang salah pada sistem Kementerian Pendidikan membutuhkan waktu yang lama, sehingga isilah data anda dengan baik dan benar
			</div>
			<div className="column pl-0 pr-5 level card">
				<div class="level is-mobile  px-2 card-header pb-2 mb-0">
					<div class="level-left">
						<h1 className="title level-item is-4 mb-0 ml-0 pb-0 has-text-grey">Data Mahasiswa</h1>
					</div>
					<div class="level-right">
						<span class="icon level-item pr-5">
							<Link
								to={`/detail_edit/${id}`}
								className="button level-right is-small is-success p-0 pr-2 mb-2 mr-2"
							>
								<i class="mr-2 material-icons">edit</i>
								<p>Edit </p>
							</Link>
						</span>
					</div>
				</div>
				<table className=" card-content table is-striped is-fullwidth">
					<tbody>
						<tr>
							<td>Nama</td>
							<td>{":"}</td>
							<td>{nama}</td>
						</tr>
						<tr>
							<td>Nim</td>
							<td>{":"}</td>
							<td>{nim}</td>
						</tr>
						<tr>
							<td>Prodi</td>
							<td>{":"}</td>
							<td>{prodi}</td>
						</tr>
						<tr>
							<td>Semester</td>
							<td>{":"}</td>
							<td>{semester}</td>
						</tr>
						<tr>
							<td>Kelas</td>
							<td>{":"}</td>
							<td>{kelas}</td>
						</tr>
						<tr>
							<td>Angkatan</td>
							<td>{":"}</td>
							<td>{angkatan}</td>
						</tr>
						<tr>
							<td>NIk</td>
							<td>{":"}</td>
							<td>{nik}</td>
						</tr>
						<tr>
							<td>Tempat Lahir</td>
							<td>{":"}</td>
							<td>{tempat}</td>
						</tr>
						<tr>
							<td>Tanggal Lahir</td>
							<td>{":"}</td>
							<td>{tgl}</td>
						</tr>
						<tr>
							<td>No HP (Whatsapp)</td>
							<td>{":"}</td>
							<td>{hp}</td>
						</tr>
						<tr>
							<td>Jenis Kelamin</td>
							<td>{":"}</td>
							<td>{jk}</td>
						</tr>
						<tr>
							<td>Agama</td>
							<td>{":"}</td>
							<td>{agama}</td>
						</tr>
						<tr>
							<td>Warga Negara</td>
							<td>{":"}</td>
							<td>{wna}</td>
						</tr>
						<tr>
							<td>NISN</td>
							<td>{":"}</td>
							<td>{nisn}</td>
						</tr>
						<tr>
							<td>Ukuran Baju</td>
							<td>{":"}</td>
							<td>{baju}</td>
						</tr>
					</tbody>
				</table>
			</div>

		</div>



	);
};

export default MhsList;
