import express from "express";
import { VerifyToken } from "../config/VerifyToken.js";
import {
	getUsers,
	getUserById,
	createUser,
	updateUser,
	deleteUser,
	loginUser
} from "../controllers/UserController.js";
import {
	getMhs,
	getMhsById,
	createMhs,
	updateMhs,
	deleteMhs
} from "../controllers/HomeControler.js";

import {
	getDetailMhs,
	getDetailMhsById,
	createDetailMhs,
	updateDetailMhs,
	// deleteDetailMhs
} from "../controllers/DetailMhsControler.js";

const router = express.Router();
//login user
router.post('/login', loginUser);
// user
router.get('/users', VerifyToken, getUsers);
router.get('/users/:id', VerifyToken, getUserById);
router.post('/users', VerifyToken, createUser);
router.patch('/users/:id', VerifyToken, updateUser);
router.delete('/users/:id', VerifyToken, deleteUser);

//data mahasiswa
router.get('/',  getMhs);
router.get('/mhs/:id',  getMhsById);
router.post('/mhs',  createMhs);
router.patch('/mhs/:id',  updateMhs);
router.delete('/mhs/:id',  deleteMhs);

// router.get('/',  getMhs);
// router.get('/mhs/:id', VerifyToken, getMhsById);
// router.post('/mhs', VerifyToken, createMhs);
// router.patch('/mhs/:id', VerifyToken, updateMhs);
// router.delete('/mhs/:id', VerifyToken, deleteMhs);

//detail mahasiswa
router.get('/detail',  getDetailMhs);
router.get('/detail/:id',  getDetailMhsById);
router.post('/detail', createDetailMhs);
router.patch('/detail/:id', updateDetailMhs);
// router.delete('/detail/:id',  deleteDetailMhs);
export default router;
