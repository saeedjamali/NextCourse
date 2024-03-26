import mongoose from "mongoose";

const schema = mongoose.Schema({
    title: {
        type: String,
        require: true
    },
    cost: {
        type: Number,
        require: true
    },
    teacher: {
        type: String,
        require: true
    },
    createdAt: {
        type: String

    },
    updatedAt: {
        type: String
    },
    img: {
        type: String,
        default: false
    }
})

const course = mongoose.models?.course || mongoose.model("course", schema);
export default course