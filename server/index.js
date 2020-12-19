require('dotenv').config();
require("./middlewares/passport");

//* use mongoose to connect database
const mongoose = require("mongoose");
mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
});

mongoose.connection.on("error", (err) => {
    console.log("Mongoose Connection ERROR: " + err.message);
});

mongoose.connection.once("open", () => {
    console.log("MongoDB Connected!");
});

const express = require('express');
const cors = require('cors');
const app = express();

//*Setup Cross Origin
app.use(cors());
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));

//*Bring in the routes
app.use("/users", require("./routes/userRoute"));
app.use("/posts", require("./routes/postRoute"));
app.use("/comment", require("./routes/commentRoute"));
app.use("/upload", require("./routes/uploadRoute"));

app.listen(process.env.PORT, () => {
    console.log("Server listening on port " + process.env.PORT);
});