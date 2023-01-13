import axios from 'axios';
import { HOST } from './config';
import { getDate } from '../utilities/dateFormat';

export async function getATMTransactions() {
  try {
    const response = await axios.post(`${HOST}/atm_transaction`);
    // change full date string to ISO format, yyyy-MM-DD
    for (let key in response.data) {
      const newDate = getDate(response.data[key].tran_date);
      response.data[key].tran_date = newDate;
    }
    return response.data;
  } catch (err) {
    console.log(err);
    return await Promise.reject('Failed to get atm transactions list!');
  }
}

export async function addATMTransaction(newTransaction) {
  try {
    const response = await axios.post(`${HOST}/atm_transaction`, newTransaction);
    console.log(response);
  } catch (err) {
    console.log(err);
    return await Promise.reject('Failed to add to ATM transactions list!');
  }
}

export async function getATMTransaction(transaction_id) {
  try {
    const response = await axios.get(`${HOST}/atm_transaction/${transaction_id}`);
    //if needed change the below to a comment
    response.data.transaction_time = getDate(response.data.transaction_time);
    return response.data;
  } catch (err) {
    console.log(err);
    return await Promise.reject('Failed to get the atm transaction!');
  }
}