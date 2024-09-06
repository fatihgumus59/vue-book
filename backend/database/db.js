import mongoose from 'mongoose';
const db = mongoose.connection;

db.once('open',()=>{
    console.log('db bağlantısı başarılı.');
});

const connectDB = async ()=>{
    mongoose.set("strictQuery", true);
    await mongoose.connect(`${process.env.MONGO_URI}`)
    .then(() => {
        console.log('DB Success');
    });
}

export default connectDB
