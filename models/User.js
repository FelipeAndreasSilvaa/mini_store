import mongoose from "mongoose"

const { Schema } = mongoose

const userSchema = new Schema(
    {
        name: {
            type: String,
            require: true
        },
        email: {
            type: String,
            unique: true,
            require: true
        },
        password: {
            type: String,
            require: true
        },
    },
    {timestamps: true}
)

export default mongoose.models.User || mongoose.model("User", userSchema)