//IMPORTS
const ConnectDB = require("./Config/Database");
const express = require("express");
const app = express();

const UsersRoutes = require("./Routes/Users");

//PORT
const PORT = process.env.PORT || 6060;

//CONNECT TO DATABASE
ConnectDB();

//ROUTES MIDDLEWARE
app.use(express.json());

//ROUTES
app.use("/api/users", UsersRoutes);

//SERVER LISTEN
app.listen(PORT, console.log(`Server started on http://localhost:${PORT}/`));
