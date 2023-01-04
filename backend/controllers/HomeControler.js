import { Mhs } from "../models/DbModel.js";
import 'dotenv/config'

export const getMhs = async (req, res) => {
	try {
		const response = await Mhs.findAll();
		res.status(200).json(response);
	} catch (error) {
		console.log(error.message);
	}
}

export const getMhsById = async (req, res) => {
	try {
		const response = await Mhs.findOne({
			where: {
				id: req.params.id
			}
		});
		res.status(200).json(response);
	} catch (error) {
		console.log(error.message);
	}
}

export const createMhs = async (req, res) => {
	const mhs= new Mhs({
		nama: req.body.nama,
		nim: req.body.nim,
		prodi: req.body.prodi,
		semester: req.body.semester, 
		kelas: req.body.kelas, 
		angkatan: req.body.angkatan
	});
	try {
		await mhs.save();
		res.status(201).json({ msg: "Data Berhasil Ditambahkan" });
	} catch (error) {
		console.log(error.message)
	}
}

export const updateMhs = async (req, res) => {
	try {
		await Mhs.update(req.body, {
			where: {
				id: req.params.id
			}
		});
		res.status(200).json({ msg: "User Updated" });
	} catch (error) {
		console.log(error.message);
	}
}

export const deleteMhs = async (req, res) => {
	try {
		await Mhs.destroy({
			where: {
				id: req.params.id
			}
		});
		res.status(200).json({ msg: "User Deleted" });
	} catch (error) {
		console.log(error.message);
	}
}
