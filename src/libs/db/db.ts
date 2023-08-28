import mongoose from "mongoose";

class DB {
    async connect() {
        try {
            const dbUri = process.env.DB_URI;
            if (!dbUri) throw new Error("Missing environment variable: DB_URI");
            return await mongoose.connect(dbUri);
        } catch (error) {
            if (error instanceof Error) {
                throw new Error("unable to establish database connection.");
            }
            return null;
        }
    }
}

const db = new DB();
export default db;
