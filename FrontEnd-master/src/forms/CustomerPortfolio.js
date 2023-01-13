import React from 'react';
//create a customer portfolio api
// need to change the below line , line 22, line 41
import { getPortfolio } from '../api/customer_info';
import { Table } from 'antd';

export default function CustomerAccsDetails() {
  const columns = [
    {
      title: 'Account No',
      dataIndex: 'account_no',
      key: 'account_no',
      //acc tables
    },
    {
      title: 'Current Balance',
      dataIndex: 'balance',
      key: 'balance',
    },
  ];

  const [customer, setCustomer] = React.useState();

  // customer list is loaded on the first component render
  React.useEffect(() => loadCustomerAccsDetails(), []);

  function loadCustomerAccsDetails() {
    getPortfolio()
      .then((data) => {
        setCustomer(data);
      })
      .catch((err) => console.log(err));
  }

  //loadCustomerList();
  //console.log(Customer);
  return (
    <div>
      <h1>Portfolio</h1>

      {<Table dataSource={customer_info} columns={columns} />}
    </div>
  );
}
