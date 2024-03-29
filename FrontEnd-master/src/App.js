
import './App.css';
import HomePage from './pages/HomePage';
import CustomerReg from './forms/CustomerRegistration';
import CustomerSet from './forms/CustomerSet';
import LoanApply from './forms/LoanApplying';
import LoanCustomerReg from './forms/LoanRegistration';

import CurrAccountReg from './forms/CurrAccountRegistration';
import SavAccountReg from './forms/SavAccountRegistration';
import FDCustomerReg from './forms/FDRegistration';

import BranchManagerLoginReg from './forms/BranchManagerLogin';
import CustomerLoginReg from './forms/CustomerLogin';
import EmployeeLoginReg from './forms/EmployeeLogin';


import ATMTransactionReg from './forms/ATMTransfer';
import OnlineTransactionReg from './forms/OnlineTransfer';

import {BrowserRouter, Route,Routes} from 'react-router-dom';

import EmployeeHome from './pages/EmployeeHome';
import EmployeeReg from './forms/EmployeeRegistration';
import IndividualCustomerReg from './forms/IndividualCustomerReg';
import ChildCustomerReg from './forms/ChildCustomerRegistration';
import OrgCustomerReg from './forms/OrgCustomerRegistration';
import BranchReg from './forms/BranchRegistration';
import ATMReg from './forms/ATMRegistration';
import EmployeeSet from './forms/EmployeeSet';
import CustomerHome from './pages/CustomerHome';
import CustomerPortfolio from './forms/CustomerPortfolio';
import CustomerUser from './forms/CustomerUser';

import BranchManagerHome from './pages/BranchManagerHome';
import LateLoanPayersReg from './forms/LateLoanPayersReportRequest';
import LateLoanPayersList from './forms/LateLoanPayersReport';
import TotalTransactionReg from './forms/TotalTransactionreportRequest';
import TotalTransactionsList from './forms/TotalTransactionReport';
import OnlineLoanCustomerReg from './forms/OnlineLoanRegistration';
function App() {
  const myStyle={
    backgroundImage: 
    "url('https://c0.wallpaperflare.com/path/128/195/784/sri-lanka-colombo-galle-face-dr-hotel-def99d38380e711fadc769ff547fdb2e.jpg')",
    height:'100vh',
    marginTop:'-70px',
    fontSize:'35px',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
};
  return (
    <div className="App" style= {myStyle}> 
    <h1>National Development Bank</h1>
    {/* <div style={{ backgroundImage:`url(${image})`,backgroundRepeat:"no-repeat",backgroundSize:"contain" }}>
    </div> */}
    
    <BrowserRouter>
        <Routes>
          <Route path = '/EmployeePortal'>
            <Route exact path = '/EmployeePortal' element = {<EmployeeHome/>}/>
              <Route path = 'currAcc-Reg' element= {<CurrAccountReg/>}/>
              <Route path = 'savAcc-Reg' element= {<SavAccountReg/>}/>
              <Route path = 'loan-apply' element= {<LoanApply/>}/>
              <Route path = 'Loan-Reg' element= {<LoanCustomerReg/>}/>
              <Route path = 'FD-Reg' element= {<FDCustomerReg/>}/>
              <Route path = 'ATM-Tran' element= {<ATMTransactionReg/>}/>

              <Route path = 'individual-customer-register' element = {<IndividualCustomerReg/>} />
              <Route path = 'child-customer-register' element = {<ChildCustomerReg/>} />
              <Route path = 'customer-register' element = {<CustomerReg/>} />
              <Route path = 'customer-set' element = {<CustomerSet/>} />
              <Route path = 'employee-register' element = {<EmployeeReg/>} />
              <Route path = 'organization-customer-register' element = {<OrgCustomerReg/>} />
              <Route path = 'branch-register' element = {<BranchReg/>} />
              <Route path = 'atm-register' element = {<ATMReg/>} />
              <Route path = 'employee-set' element = {<EmployeeSet/>} />
              <Route path = 'employee-login' element = {<EmployeeLoginReg/>} />
            </Route>

          <Route path = '/CustomerPortal'>
            <Route exact path = '/CustomerPortal' element = {<CustomerHome/>}/>
            <Route path = 'Online-Tran' element= {<OnlineTransactionReg/>}/>
            <Route path = 'portfolio' element = {<CustomerPortfolio/>} />
            <Route path = 'user' element = {<CustomerUser/>} />
            <Route path = 'online-loan' element = {<OnlineLoanCustomerReg/>} />
            <Route path = 'customer-login' element = {<CustomerLoginReg/>} />
          </Route>
          
          <Route path = '/branchManagerPortal'>
            <Route exact path = '/branchManagerPortal' element = {<BranchManagerHome/>}/>
            <Route path = 'lateloanRequest' element= {<LateLoanPayersReg/>}/>
            <Route path = 'lateloanReport/:branchID' element= {<LateLoanPayersList/>}/>
            <Route path = 'totaltransactionRequest' element = {<TotalTransactionReg/>} />
            <Route path = 'totaltransactionReport/:branchID' element = {<TotalTransactionsList/>} /> 
            <Route path = 'login' element = {<BranchManagerLoginReg/>} />
          </Route>
          
          {/*for homepage */}
          <Route path='/' element={<HomePage />} />
        </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
