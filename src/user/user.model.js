import { Schema, model } from "mongoose"

const userSchema = new Schema({
    name: {
        type: String,
        required: [true, "El nombre es requerido"],
        maxLength: [30, "El nombre no puede ser mayor a 30 caracteres"]
    },
    surname: {
        type: String,
        required: [true, "El apellido es requerido"],
        maxLength: [30, "El apellido no puede ser mayor a 30 caracteres"]
    },
    username: {
        type: String,
        required: true,
        unique:true
    },
    email: {
        type: String,
        required: [true, "El email es requerido"],
        unique: true
    },
    password: {
        type: String,
        required: [true, "La contraseña es requerida"],
    },
    role: {
        type: String,
        enum: ["ADMIN_ROLE"],
        default: "ADMIN_ROLE"
    }
},
{
    versionKey: false,
    timestamps: true
})

export default model("User", userSchema)