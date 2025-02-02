import jwt from "jsonwebtoken"

export const generateToken = (userId, res) =>{
    const token = jwt.sign({userId}, process.env.JWT_SECRET, {
        expiresIn: "7d"
    })

    res.cookie("jwt_token", token, {
        maxAge: 7* 24 * 60 * 60 * 1000, // 7 Dayes im MS 
        httpOnly: true, // Prevent XSS attacks
        sameSite: "strict",
        secure: process.env.NODE_ENV !== "dev"
    })

    return token
}