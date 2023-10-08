const express = require("express");
const app = express();
const cors = require("cors");
app.use(express.json());
app.use(cors({
    origin: "http://localhost:3000 "
}));
app.use("/planets", require("./routes/planets/planets.router"));
module.exports = app;
