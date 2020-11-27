const express = require("express")
const app = express();
const cors = require("cors")

//middleware

app.use(express.json());
app.use(cors())

//ROUTES
//register and login ROUTES
app.use("/auth", require("./routes/jwtAuth"))

//dashboard ROUTE
app.use("/dashboard", require("./routes/dashboard"))


app.listen(5000, () => {
  console.log("server is running on port 5000")
})
