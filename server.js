require("dotenv").config()
let http = require("http")
let express = require("express");
const dbConnect = require("./db/dbconnect");
const { route } = require("./routes/admin.route");
const routes = require("./routes");
let app = express();
app.use(express.json());

//routes
app.use("/v1", routes)

//database connect
dbConnect()

//server
http.createServer(app).listen(process.env.PORT, () => {
    console.log("server stated");
});