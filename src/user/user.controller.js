import { hash } from "argon2";
import User from "./user.model.js";


export const initializeAdminUser = async () => {
    try {
        const adminExists = await User.findOne({ role: "ADMIN_ROLE" });

        if (!adminExists) {
            const hashedPassword = await hash("ADMINCORPOREX$sin");

            const admin = new User({
                name: "Fredy",
                surname: "Hernàndez",
                username: "admin_role",
                email: "fredy32@corporex.com",
                password: hashedPassword,
                phone: "21326554",
                role: "ADMIN_ROLE",
            });

            await admin.save();
            console.log("Usuario creado correctamente");
        }
    } catch (error) {
        console.error("Error al inicializar el usuario:", error);
    }
};