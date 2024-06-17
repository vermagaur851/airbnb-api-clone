import app from "./app";
import connectDB from "./config/database";

// connectDB();
app.get('/',(req,res,next)=>{
    res.send("app is running");
})

app.listen(3000,()=>{
    console.log('Listening on 127.0.0.1:3000');
})