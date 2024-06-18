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

app.listen(process.env.PORT,()=>{
    console.log('Listening on port: ',process.env.PORT);
})