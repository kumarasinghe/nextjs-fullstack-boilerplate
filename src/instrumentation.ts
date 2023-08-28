import DB from "@/libs/db";

/* app initialization */

export async function register() {
    await DB.connect();
}
