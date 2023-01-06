import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Sidebar from "../../components/SideBar";

const DetailEditMhs = () => {
	const [nama, setName] = useState("");
	const [nim, setNim] = useState("");
	const [prodi, setProdi] = useState("");
	const [semester, setSemester] = useState("");
	const [kelas, setKelas] = useState("");
	const [angkatan, setAngkatan] = useState("");

	const [nik, setNik] = useState("");
	const [tempa_lhr, setTlahir] = useState("");
	const [tgl, setTgl] = useState("");
	const [hp, setHp] = useState("");
	const [jk, setJk] = useState("");
	const [agama, setAgama] = useState("");
	const [wna, setWna] = useState("");
	const [nisn, setNisn] = useState("");
	const [Ukuran_baju, setBaju] = useState("");

	const [success, setSuccess] = useState(false);

	const navigate = useNavigate();
	const { id } = useParams();

	useEffect(() => {
		getUserById();
		getDetailByMhid();
	}, []);

	const updateData = async (e) => {
		e.preventDefault();
		updateDetail();
		updateUser();
	}
	const updateDetail = async (e) => {
		try {
			await axios.patch(`http://localhost:5000/detail/${id}`, {
				nik,
				tempa_lhr,
				tgl,
				hp,
				jk,
				agama,
				wna,
				nisn,
				Ukuran_baju
			});
		} catch (error) {
			console.log(error);
		}
	};
	const updateUser = async (e) => {
		try {
			await axios.patch(`http://localhost:5000/mhs/${id}`, {
				nama,
				nim,
				prodi,
				semester,
				kelas,
				angkatan
			});
			navigate(`/detail_edit/${id}`);
			setSuccess(true)
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
		} catch (error) {
		}

	};

	return (
		<div className="columns is-centered">
			<Sidebar />
			<div className="column is-10 is-centered" style={{ "border-left": "solid hsl(0, 0%, 71%) 1px" }}>
				<div className="column mr-2 is-halft mt-2 has-text-success notification " style={{ "background-color": "hsl(142, 52%, 96%)" }}>
					1) Data Biodata, harus diisi lengkap dan benar, untuk keperluan pendaftaran data anda ke data Kementerian Pendidikan dan Kebudayaan,
					<><br /></>
					2) Perbaikan data yang salah pada sistem Kementerian Pendidikan membutuhkan waktu yang lama, sehingga isilah data anda dengan baik dan benar
				</div>
				<div className="column is-halft">
					<form onSubmit={updateData}>
						<div className="field">
							<label className="label">Nama</label>
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
							<label className="label">Prodi</label>
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
							<label className="label">Semester</label>
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
							<label className="label">Kelas</label>
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
							<label className="label">Angkatan</label>
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
							<label className="label">NIK</label>
							<div className="control">
								<input
									type="text"
									className="input"
									value={nik}
									onChange={(e) => setNik(e.target.value)}
									placeholder="Name"
								/>
							</div>
						</div>
						<div className="field">
							<label className="label">Tempat Lahir</label>
							<div className="control">
								<input
									type="text"
									className="input"
									value={tempa_lhr}
									onChange={(e) => setTlahir(e.target.value)}
									placeholder="Name"
								/>
							</div>
						</div>
						<div className="field">
							<label className="label">Tanggal Lahir</label>
							<div className="control">
								<input style={{"width":"200px"}}
									type="date"
									className="input"
									value={tgl}
									onChange={(e) => setTgl(e.target.value)}
									placeholder="Name"
								/>
							</div>
						</div>
						<div className="field">
							<label className="label">No HP</label>
							<div className="control">
								<input
									type="text"
									className="input"
									value={hp}
									onChange={(e) => setHp(e.target.value)}
									placeholder="Name"
								/>
							</div>
						</div>
						<div className="field">
							<label className="label">Jenis Kelamin</label>
							<div className="control">
								<div className="select isfullwidth">
									<select style={{"width":"200px"}}
										value={jk}
										onChange={(e) => setJk(e.target.value)}
									>
										<option value="Laki-laki">Laki-laki</option>
										<option value="Perempuan">Perempuan</option>
									</select>
								</div>
							</div>
						</div>
						<div className="field">
							<label className="label">Agama</label>
							<div className="control">
								<input
									type="text"
									className="input"
									value={agama}
									onChange={(e) => setAgama(e.target.value)}
									placeholder="Name"
								/>
							</div>
						</div>
						<div className="field">
							<label className="label">Warga Negara</label>
							<div className="control">
								<input
									type="text"
									className="input"
									value={wna}
									onChange={(e) => setWna(e.target.value)}
									placeholder="Name"
								/>
							</div>
						</div>
						<div className="field">
							<label className="label">NISN</label>
							<div className="control">
								<input
									type="text"
									className="input"
									value={nisn}
									onChange={(e) => setNisn(e.target.value)}
									placeholder="Name"
								/>
							</div>
						</div>
						<div className="field">
							<label className="label">Ukuran Baju</label>
							<div className="control">
								<input
									type="text"
									className="input"
									value={Ukuran_baju}
									onChange={(e) => setBaju(e.target.value)}
									placeholder="Name"
								/>
							</div>
						</div>
						{success ? <div className="notification is-danger-light has-text-success mb-1" style={{ "background-color": "hsl(142, 52%, 96%)" }}>
							Data Berhasil Dirubah
							<button className="delete" onClick={() => setSuccess(!success)}>Toggle</button>
						</div> : null}

						<div className="field pt-3">
							<button type="submit" className="button is-success">
								Update
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default DetailEditMhs;
