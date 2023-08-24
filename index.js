

const express = require("express");
const customerRoutes = require("./routes/customers.routes");
const roomRoutes = require("./routes/rooms.routes");
const { db } = require("./db/connect");

const app = express();

//Connecting DB
db();

//Middleware ->req ->  stream of data -> json object
app.use(express.json());
app.use("/v1", customerRoutes);
app.use("/v1", roomRoutes);
// localhost:8000/users -> localhost:8000/v1/users
// localhost:8000/products -> localhost:8000/v1/products

app.listen(8001, () => {
  console.log(`App is running on PORT: 8001`);
});

// Install MongoDB and other dependencies (ORM) -> Mongoose
// Connect DB with Express App.
// Define the structure of your collections (SCHEMA)
// Create a model using that structure
// Use the model to perform CRUD