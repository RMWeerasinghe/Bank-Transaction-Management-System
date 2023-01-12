const express = require("express");
const cors = require("cors");
//import controllers
const branchRoutes=require ("./app/routes/branch.routes.js");
const installmentRoutes=require ("./app/routes/loan_installment.route.js");
const lateInstallmentRoutes=require ("./app/routes/late_installment.route.js");
const onlineApplicationRoutes=require ("./app/routes/online_loan_application.route.js");
const onlineTranRoutes=require ("./app/routes/online_transaction.route.js");
const orgRoutes=require('./app/routes/organization_customer.route.js');
const savAccTypeRoutes=require('./app/routes/savings_acc_type.route.js');
const savingsAccRoutes=require('./app/routes/savings_account.route');
const totTransactionRoutes=require('./app/routes/total_transaction.route.js');

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
app.use ("api/organization_customer",orgRoutes);
app.use("/api/savings_account",savingsAccRoutes);
app.use("/api/savings_acc_type",savAccTypeRoutes);
app.use("/api/total_transaction",totTransactionRoutes);

app.listen(port, () => {
    console.log(`Server is running on port ${port}.`);
});
