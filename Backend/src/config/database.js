const { default: mongoose } = require("mongoose");

async function ConnetToDB() {
    mongoose.connect("mongodb+srv://harshit:r1pyA35jac2pvqW8@cluster0.klwos4s.mongodb.net/sms")
    .then(()=>{
        console.log("Connected to database");
    })
    .catch((error)=>{
        console.error("",error);  
    })
}

module.exports = ConnetToDB