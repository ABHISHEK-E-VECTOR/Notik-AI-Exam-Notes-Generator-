import jwt from 'jsonwebtoken';

export const getToken = (user) => {
    try {
        const token = jwt.sign({userId},process.env.JWT_SECRET, { expiresIn: '7d' });
        console.log(token)
        return token
        
    }catch (error) {
        console.error('Error generating token:', error);
    }

}
