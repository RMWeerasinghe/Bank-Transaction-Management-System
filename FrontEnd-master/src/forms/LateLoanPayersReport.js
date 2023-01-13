import React from 'react';

import { getLateLoanPayers} from '../api/LateInstallment';
import { Table } from 'antd';

export default function LateLoanPayersList() {
  const columns = [
    {
      title: 'Branch Code',
      dataIndex: 'branch_code',
      key: 'branch_code',
    },
    {
      title: 'Customer ID',
      dataIndex: 'customer_id',
      key: 'customer_id',
    },
    {
      title: 'Loan No',
      dataIndex: 'loan_no',
      key: 'loan_no',
    },
    {
      title: 'Installment ID',
      dataIndex: 'installment_id',
      key: 'installment_id',
    },
  ];

  const [late_installment, setlate_installment] = React.useState();

  // customer list is loaded on the first component render
  React.useEffect(() => loadLateLoanPayersList(), []);

  function loadLateLoanPayersList() {
    getLateLoanPayers()
      .then((data) => {
        setlate_installment(data);
      })
      .catch((err) => console.log(err));
  }

  //loadCustomerList();
  //console.log(Customer);
  return (
    <div>
      <h1>Late Loan Payers Report</h1>

      {<Table dataSource={late_installment} columns={columns} />}
    </div>
  );
}
