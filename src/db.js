import mongoose from "mongoose";
import config from "./config.js";

(async () => {
    try {
        const URI = 'mongodb+srv://david:passwordproduction@cluster0.nul4emt.mongodb.net/rsvp'
        const dbData = await mongoose.connect(URI);
        console.log("DB conectada: " + dbData.connection.name)
    }catch(error) {
        console.log(error)
    }

})()
