import mongoose from "mongoose";

async function DBConnection() {
    try {
        await mongoose.connect('mongodb+srv://yj0034046:PFcx8gYubT6ET933@cluster0.ymsogh5.mongodb.net/')
        console.log('Connection Succeed :-)');
    }
    catch (error) {
        console.log('sorry we cant connect with dB:-(', error)
    }
}

export default DBConnection;