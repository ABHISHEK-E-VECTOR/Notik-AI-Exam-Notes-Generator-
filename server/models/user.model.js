import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name: {
        type: String, 
        required: true
    },
    email: {   
        type: string,   
        required: true,
        unique: true 
    },credits: {
        type: Number,
        default: 50,
        minimum: 0,

    }, 
    isCreditAvailable: {
        type: Boolean,
        default: true
    },
    notes: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: "Note",
        default: []

    }  
},{timestamps: true});

userModel = mongoose.model("User", userSchema);
export default userModel;   