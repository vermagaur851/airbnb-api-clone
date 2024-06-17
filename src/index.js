import app from "./app.js";
import connectDB from "./config/database.js";

try {
    await connectDB();
} catch (error) {
    console.log("MongoDB could not connect !!!");
}
app.get('/',(req,res,next)=>{
    res.send("app is running");
})

app.listen(3000,()=>{
    console.log('Listening on 127.0.0.1:3000');
})