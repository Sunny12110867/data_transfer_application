import mongoose from "mongoose";

const dbConnect = async (req,res) =>{
    try {
 const database_instance =  await mongoose.connect(`mongodb+srv://sunny:bhardwaj@cluster0.zvlsqqz.mongodb.net/
 `)
    console.log('connected to mongoose');
    } catch (error) {
        console.log('error while connected to database in index.db.js file : ',error);
    }
}

export default dbConnect;