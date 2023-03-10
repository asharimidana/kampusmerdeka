import { MhsDetail } from "../models/DbModel.js";
import 'dotenv/config'

export const getDetailMhs = async (req, res) => {
	try {
		const response = await MhsDetail.findAll();
		res.status(200).json(response);
	} catch (error) {
		console.log(error.message);
	}
}

export const getDetailMhsById = async (req, res) => {
	try {
		const response = await MhsDetail.findOne({
			where: {
				mhId: req.params.id
			}
		});

		if (!response) {
			res.status(400).json({
				status: res.statuscode,
				message: 'Tidak ada Data ada'
			})
		}
		res.status(200).json(response);
	} catch (error) {
	}
}

export const createDetailMhs = async (req, res) => {
	const mhsDetail = new MhsDetail({
		nik: req.body.nik,
		tempa_lhr: req.body.tempa_lhr,
		tgl: req.body.tgl,
		hp: req.body.hp,
		jk: req.body.jk,
		agama: req.body.agama,
		wna: req.body.wna,
		nisn: req.body.nisn,
		Ukuran_baju: req.body.ukuran_baju,
		mhId: req.body.mhId,
	});
	try {
		await mhsDetail.save();
		res.status(201).json({ msg: "Data Berhasil Ditambahkan" });
	} catch (error) {
		console.log(error.message)
	}
}

export const updateDetailMhs = async (req, res) => {
	try {
		await MhsDetail.update(req.body, {
			where: {
				mhId: req.params.id,
			}
		});
		res.status(200).json({ msg: "User Updated" });
	} catch (error) {
		console.log(error.message);
	}
}
//
// export const deleteDetailMhs = async (req, res) => {
// 	try {
// 		await MhsDetail.destroy({
// 			where: {
// 				id: req.params.id
// 			}
// 		});
// 		res.status(200).json({ msg: "User Deleted" });
// 	} catch (error) {
// 		console.log(error.message);
// 	}
// }
