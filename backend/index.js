const express = require("express");
const cors = require("cors");
//import routes
const accRoutes = require("./app/routes/account.routes.js");
const atmRoutes = require("./app/routes/atm.routes.js");
const atmTranRoutes = require("./app/routes/atm_transaction.routes.js");
const branchRoutes=require ("./app/routes/branch.routes.js");
const branchManagerRoutes = require("./app/routes/branch_manager.routes.js");
const childRoutes = require("./app/routes/child_customer.routes.js");
const currAccRoutes = require("./app/routes/current_account.routes.js");
const customerRoutes = require("./app/routes/customer.routes.js");
const empRoutes = require("./app/routes/employee.routes.js");
const fdIntRoutes = require("./app/routes/fd_interest.routes.js");
const fdRoutes = require("./app/routes/fixed_deposit.routes.js");
const indRoutes = require("./app/routes/individual_customer.routes.js");
const loanRoutes = require("./app/routes/loan.routes.js");
const loanAppRoutes = require("./app/routes/loan_application.routes.js");
const installmentRoutes=require ("./app/routes/loan_installment.route.js");
const lateInstallmentRoutes=require ("./app/routes/late_installment.route.js");
const onlineApplicationRoutes=require ("./app/routes/online_loan_application.route.js");
const onlineTranRoutes=require ("./app/routes/online_transaction.route.js");
const orgRoutes=require('./app/routes/organization_customer.route.js');
const savAccTypeRoutes=require('./app/routes/savings_acc_type.route.js');
const savingsAccRoutes=require('./app/routes/savings_account.route');
const totTransactionRoutes=require('./app/routes/total_transaction.route.js');
const customerAccRoutes=require('./app/routes/customer_account.routes.js');

const customerLoginRoutes=require("./app/routes/customer_login.route.js");
const employeeLoginRoutes=require("./app/routes/employee_login.route.js")
const managerLoginRoutes=require("./app/routes/branch_manager_login.route.js")



const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = 8000;

//Routes
app.use("/api/account",accRoutes);
app.use("/api/atm",atmRoutes);
app.use("/api/atm_transaction",atmTranRoutes);
app.use("/api/branch", branchRoutes);
app.use("/api/branch_manager",branchManagerRoutes);
app.use("/api/child_customer",childRoutes);
app.use("/api/current_account",currAccRoutes);
app.use("/api/customer",customerRoutes);
app.use("/api/employee",empRoutes);
app.use("/api/fd_interest",fdIntRoutes);
app.use("/api/fixed_deposit",fdRoutes);
app.use("/api/individual_customer",indRoutes);
app.use("/api/loan",loanRoutes);
app.use("/api/loan_application",loanAppRoutes);
app.use("/api/loan_installment",installmentRoutes);
app.use("/api/late_installment",lateInstallmentRoutes);
app.use("/api/online_loan_application",onlineApplicationRoutes);
app.use("/api/online_transaction",onlineTranRoutes);
app.use ("api/organization_customer",orgRoutes);
app.use("/api/savings_account",savingsAccRoutes);
app.use("/api/savings_acc_type",savAccTypeRoutes);
app.use("/api/total_transaction",totTransactionRoutes);
app.use("/api/customer_info",customerAccRoutes);

app.use("/api/customer_account", customerLoginRoutes);
app.use("/api/employee_login", employeeLoginRoutes);
app.use("/api/branch_manager_login", managerLoginRoutes);


app.listen(port, () => {
    console.log(`Server is running on port ${port}.`);
});
