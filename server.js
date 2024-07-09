const express = require("express")

const app = express() 

const port = 5000 

const verifDate=(req,res,next)=>{ 
    var currentDate = new Date()  

    var currentHour = currentDate.getHours() 

    var currentDay = currentDate.getDate() 

    if(currentDay == 6|| currentDay == 0 || currentHour > 17 || currentHour < 9) { 
        return res.send("the website is closed")

    } 
    next() 

} 
app.use(verifDate)

app.get("/",(req,res)=>{ 
    res.sendFile(__dirname+"/public/homepage.html")})

app.get("/services",(req,res)=>{ 
    res.sendFile(__dirname+"/public/services.html")
})
    
app.get("/Contact",(req,res)=>{res.sendFile(__dirname+"/public/contactUs.html")}) 

app.listen(port,console.log(`server is running on the port ${port}`)) 

