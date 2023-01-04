import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

// tabel user 
export const User = db.define('users', {
	name: DataTypes.STRING,
	email: DataTypes.STRING,
	password: DataTypes.STRING
}, {
	freezeTableName: true
});

// tabel mahasiswa
export const Mhs = db.define('mhs', {
	nama: DataTypes.STRING,
	nim: DataTypes.STRING,
	prodi: DataTypes.STRING,
	semester: DataTypes.INTEGER(2),
	kelas: DataTypes.CHAR,
	angkatan: DataTypes.INTEGER(4)
}, {
	freezeTableName: true
});

// tabel detail mahasiswa
export const MhsDetail = db.define('mhs_detail', {
	nik: DataTypes.INTEGER,
	tempa_lhr: DataTypes.STRING,
	tgl: DataTypes.DATE,
	hp: DataTypes.INTEGER,
	jk: DataTypes.STRING,
	agama: DataTypes.STRING,
	wna: DataTypes.STRING,
	nisn: DataTypes.INTEGER,
	Ukuran_baju: DataTypes.CHAR,
	mhId: DataTypes.INTEGER,
}, {
	freezeTableName: true
});
// realasi one to one mahasiswa  dan detail mahasiswa
Mhs.hasOne(MhsDetail);
MhsDetail.belongsTo(Mhs);

(async () => {
	await db.sync();
})();
