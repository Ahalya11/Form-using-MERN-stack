const mongoose=require('mongoose');
const config=require('config');
const db=config.get('mongoURI');
const connectDB=async() => {
    try{
        const conn=await mongoose.connect(db,{
            useCreateIndex:true,
            useNewUrlParser:true,
            useUnifiedTopology:true
        })
        console.log('mongodb is connected');
    }catch(err){
        console.error( err.message);
        process.exit(1);
    }
}
module.exports=connectDB;