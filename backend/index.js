const express = require("express");
const cors = require("cors");
const branchRoutes=require ("./app/routes/branch.routes.js");
const installmentRoutes=require ("./app/routes/loan_installment.route.js");
const lateInstallmentRoutes=require ("./app/routes/late_installment.route.js");
const onlineApplicationRoutes=require ("./app/routes/online_loan_application.route.js");
const onlineTranRoutes=require ("./app/routes/online_transaction.route.js");
const customerRoutes=require ("./app/routes/customer.routes.js");
const accountRoutes=require ("./app/routes/account.routes.js");
const atmRoutes=require ("./app/routes/atm.routes.js");
const atmTransactionRoutes=require ("./app/routes/atm_transaction.routes.js");
const branchManagerRoutes=require ("./app/routes/branch_manager.routes.js");
const child_customerRoutes=require ("./app/routes/child_customer.routes.js");
const currentAccountRoutes=require ("./app/routes/current_account.routes.js");


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
app.use("/api/onlineTransaction",onlineTranRoutes);
app.use("/api/customer",customerRoutes);
app.use("/api/account",accountRoutes);
app.use("/api/atm",atmRoutes);
app.use("/api/atm_transaction",atmTransactionRoutes);
app.use("/api/branch_manager",branchManagerRoutes);
app.use("/api/child_customer",child_customerRoutes);
app.use("/api/current_account",currentAccountRoutes);

app.listen(port, () => {
    console.log(`Server is running on port ${port}.`);
});
