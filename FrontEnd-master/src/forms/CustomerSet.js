import React from 'react';

import { getCustomers } from '../api/Customers';
import { Table } from 'antd';

export default function CustomerList() {
  const columns = [
    {
      title: 'Customer ID',
      dataIndex: 'customer_id',
      key: 'customer_id',
    },
    {
      title: 'Phone',
      dataIndex: 'contact_no',
      key: 'contact_no',
    },
    {
      title: 'Email', 
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Address No', 
      dataIndex: 'address_no',
      key: 'address_no',
    },
    {
      title: 'Street', 
      dataIndex: 'street',
      key: 'street',
    },
    {
      title: 'Town', 
      dataIndex: 'town',
      key: 'town',
    },
  ];

  const [customers, setCustomers] = React.useState();

  // customer list is loaded on the first component render
  React.useEffect(() => loadCustomerList(), []);

  function loadCustomerList() {
    getCustomers()
      .then((data) => {
        setCustomers(data);
      })
      .catch((err) => console.log(err));
  }

  //loadCustomerList();
  //console.log(Customer);
  return (
    <div>
      <h1>Customer List</h1>

      {<Table dataSource={customers} columns={columns} />}
    </div>
  );
}
