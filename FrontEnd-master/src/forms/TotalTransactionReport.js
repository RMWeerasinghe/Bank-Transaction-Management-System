import React from 'react';

import { getTotalTransactions} from '../api/TotalTransaction';
import { Table } from 'antd';

export default function TotalTransactionsList() {
  const columns = [
    {
      title: 'Transaction ID',
      dataIndex: 'transaction_id',
      key: 'transaction_id',
    },
    {
      title: 'From Acc',
      dataIndex: 'from_acc',
      key: 'from_acc',
    },
    {
      title: 'To Acc',
      dataIndex: 'to_acc',
      key: 'to_acc',
    },
    {
      title: 'Amount',
      dataIndex: 'amount',
      key: 'amount',
    },
    {
        title: 'Type',
        dataIndex: 'type',
        key: 'type',
      },
      {
        title: 'Transaction Time',
        dataIndex: 'transaction_time',
        key: 'transaction_time',
      },
  ];

  const [total_transaction, settotal_transaction] = React.useState();

  // customer list is loaded on the first component render
  React.useEffect(() => loadTotalTransactionsList(), []);

  function loadTotalTransactionsList() {
    getTotalTransactions()
      .then((data) => {
        settotal_transaction(data);
      })
      .catch((err) => console.log(err));
  }

  //loadCustomerList();
  //console.log(Customer);
  return (
    <div>
      <h1>Total Transaction Report</h1>

      {<Table dataSource={total_transaction} columns={columns} />}
    </div>
  );
}
