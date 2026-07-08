import UserModel from "../models/user.model.js";


export const goolgeAuth = async (req, res) => {
    try {
        const {name , email} = req.body
        let user = await UserModel.findOne({email})
        if(!user) {
            user = new UserModel({name, email})
        }
        const token =  await getToken(user._id)
        res.cookie("token", token , {
            httpOnly: true,
            secure: false,
            sameSite: "strict",
            maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
        })
        return res.status(200).json({message: "User signed in successfully", user, token})
    }catch (error) {
        console.error('Error during Google authentication:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}
export const logOut = (req, res) => {
    try {
        await res.clearCookie("token")
        return res.status(200).json({message: "Logout successfully"})
    }catch (error) {
        console.error('Error during logout:', error);
        res.status(500).json({ message: 'Internal server error' }); 
    }
}