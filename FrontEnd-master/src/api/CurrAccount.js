import axios from 'axios';
import { HOST } from './config';

export async function getCurrAccounts() {
  try {
    const response = await axios.get(`${HOST}/current_account`);
    return response.data;
  } catch (err) {
    console.log(err);
    return await Promise.reject('Failed to get Current Accounts list!');
  }
}

export async function addCurrAccount(newCustomer) {
  try {
    const response = await axios.post(`${HOST}/current_account`, newCustomer);
    console.log(response);
  } catch (err) {
    console.log(err);
    return await Promise.reject('Failed to add to Current Accounts list!');
  }
}

export async function getCurrAccount(account_no) {
  try {
    const response = await axios.get(`${HOST}/current_account/${account_no}`);
    return response.data;
  } catch (err) {
    console.log(err);
    return await Promise.reject('Failed to get the Current account');
  }
}