import { User } from "../models/DbModel.js";
import bcrypt from "bcryptjs";
import { loginValidation, registerValidation } from "../config/Validation.js";
import jwt from "jsonwebtoken"
import 'dotenv/config'

export const getUsers = async (req, res) => {
	try {
		const response = await User.findAll();
		res.status(200).json(response);
	} catch (error) {
		console.log(error.message);
	}
}

export const getUserById = async (req, res) => {
	try {
		const response = await User.findOne({
			where: {
				id: req.params.id
			}
		});
		res.status(200).json(response);
	} catch (error) {
		console.log(error.message);
	}
}

export const loginUser = async (req, res) => {
	// email verification
	const user = await User.findOne({ email: req.body.email });
	if (!user) return res.status(400).json({
		status: res.statuscode,
		message: 'email anda salah'
	})
	// check password
	const validPassword = await bcrypt.compare(req.body.password, user.password)
	if (!validPassword) return res.status(400).json({
		status: res.statuscode,
		message: 'password anda salah '
	})

	// res.send('berhasil login');
	// membuat token dengan jwt
	const token = jwt.sign({ _id: user._id }, process.env.SECRET_KEY)
	res.header('auth-token', token).json({
		token: token
	})
}

export const createUser = async (req, res) => {
	// login validation
	const { error } = registerValidation(req.body)
	if (error) return res.status(400).json({
		status: res.statuscode,
		message: error.details[0].message
	})

	// email verification
	const emailExist = await User.findOne({ email: req.body.email });
	if (emailExist) return res.status(400).json({
		status: res.statuscode,
		message: 'email sudah digunakan'
	})

	// hasing data
	const salt = await bcrypt.genSalt(10)
	const hashPassword = await bcrypt.hash(req.body.password, salt)
	const user = new User({
		name: req.body.name,
		email: req.body.email,
		password: hashPassword
	});

	try {
		const inserteduser = await user.save();
		res.status(201).json(inserteduser);
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
}

export const updateUser = async (req, res) => {
	try {
		await User.update(req.body, {
			where: {
				id: req.params.id
			}
		});
		res.status(200).json({ msg: "User Updated" });
	} catch (error) {
		console.log(error.message);
	}
}

export const deleteUser = async (req, res) => {
	try {
		await User.destroy({
			where: {
				id: req.params.id
			}
		});
		res.status(200).json({ msg: "User Deleted" });
	} catch (error) {
		console.log(error.message);
	}
}
