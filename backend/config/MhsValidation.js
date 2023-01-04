import Joi from "@hapi/joi";

export const registerValidation = (data) => {
	const schema = Joi.object({
		nama: Joi.string()
			.required(),
		prodi: Joi.string()
			.required(),
		semester: Joi.number()
			.required(),
		kelas: Joi.string()
			.required(),
		angkatan: Joi.number()
			.required()
	})
	return schema.validate(data)
}
