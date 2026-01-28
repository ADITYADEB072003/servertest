const express =require("express");
const app=express();
app.use(express.json());

app.get("/",(req,res) =>{
res.send("server is running on render");

});

app.get("/api/hello",(req,res)=>{
res.json({message:"ok"});
});

const PORT=process.env.PORT||3000

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
