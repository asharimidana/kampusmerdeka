import jwt from "jsonwebtoken"
export const VerifyToken = (req, res, next) => {
	const token = req.header('auth-token')
	if (!token) return res.status(400).json({
		status: res.statusCode,
		message: 'tidak ada akses'
	})
	try {
		const verified = jwt.verify(token, process.env.SECRET_KEY)
		res.user = verified
		next()
	} catch (err) {
		res.status(400).json({
			status: res.statusCode,
			message: "Pasword atau username salah"
		})
	}
}
