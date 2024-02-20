const express= require("express");
const app = express();

const routers = require("./routes/routes")



app.set('view engine', 'ejs');


//middleware to routes

app.use("/", routers);



app.listen(3000, () => {
    console.log("Server is listening on port localhost:3000");
});