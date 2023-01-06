const express = require("express");
const cors = require("cors");
const branchRoutes=require ("./app/routes/branch.routes.js");


const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = process.env.PORT || 3000;

app.use("/api/branch", branchRoutes)

app.listen(port, () => {
    console.log(`Server is running on port ${port}.`);
});
