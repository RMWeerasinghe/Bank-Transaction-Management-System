import axios from 'axios';
import { HOST } from './config';


export async function getTotalTransactions(branch_code) {
  try {
    const response = await axios.get(`${HOST}/total_transaction/${branch_code}`);
    console.log(response)
    return response.data;
  } catch (err) {
    console.log(err);
    return await Promise.reject('Failed to get late loan payers!');
  }
}

// need to change this to post the branch code for matching purposes
export async function sendBranchCode(branch_code) {
    try {
      const response = await axios.post(`${HOST}/total_transaction/add`,branch_code);
      console.log(response);
    } catch (err) {
      console.log(err);
      return await Promise.reject('Invalid Branch Code');
    }
  }