import { Mhs } from "../models/DbModel.js";
import 'dotenv/config'

export const searchData = async (req, res) => {

	try {
		const { q } = req.query;
		const keys = ["nama", "nim", "prodi"];

		const response = await Mhs.findAll();

		const search = (data) => {
			return data.filter((item) =>
				keys.some((key) => item[key].toLowerCase().includes(q))
			);
		};
		q ? res.json(search(response).slice(0, 10)) : res.json(search(response).slice(0, 20));
	} catch (error) {
		console.log(error.message);
	}
}
