const express =require("express");

const cors = require("cors");

const app=express();
app.use(express.json());
app.use(cors());
app.get("/",(req,res) =>{
res.send("server is running on render");

});

app.get("/api/hello",(req,res)=>{
res.json({message:"Hello from server!"});
});

const PORT=process.env.PORT||3000

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
