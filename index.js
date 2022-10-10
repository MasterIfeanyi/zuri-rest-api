const express = require("express");
const { json } = require("express");
const flights = require("./controllers/flightController");
const routes = require("./routes/flightRoute");
const cors = require("cors");

const app = express();

const PORT = 3500;

// cross origin resource sharing
app.use(cors({
  origin: "*"
}));

// middleware to handle url encoded data
app.use(express.urlencoded({ extended: false }));

app.use(json());

app.use("/flights", routes);

const port = 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
