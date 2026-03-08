const app = require("./src/app");
const ConnetToDB = require("./src/config/database");


const PORT = 3000;

ConnetToDB()

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
    
});

app.get("/login",(req,res) => {
    res.send("Login PAGE");
});