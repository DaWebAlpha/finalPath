import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const MONGO_URI = process.env.MONGO_URI;

mongoose.connect(MONGO_URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.on("connected", ()=>{
    console.log("Database is connected");
})

mongoose.connection.on("error", (err)=>{
    console.log(`Database could not connect ${err}`);
})

mongoose.connection.on("disconnected", ()=>{
    console.log("Database has been disconnected");
})

export default mongoose;