export const auth = async (email, password) => {
    if (email !== "admin@gmail.com" && password !== "testtest") {
        throw new Error("Something went wrong. Try again.");   
    }
    return {
        token: "auth-token",
        userId: "1",
    }  
}