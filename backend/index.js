const express = require("express");
const cors = require("cors");
const branchRoutes=require ("./app/routes/branch.routes.js");
const installmentRoutes=require ("./app/routes/loan_installment.route.js");
const lateInstallmentRoutes=require ("./app/routes/late_installment.route.js");
const onlineApplicationRoutes=require ("./app/routes/online_loan_application.route.js");


const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = process.env.PORT || 3000;

//Routes
app.use("/api/branch", branchRoutes);
app.use("/api/installments",installmentRoutes);
app.use("/api/late_installments",lateInstallmentRoutes);
app.use("/api/online_loan_application",onlineApplicationRoutes);

app.listen(port, () => {
    console.log(`Server is running on port ${port}.`);
});
