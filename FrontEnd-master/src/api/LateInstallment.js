import axios from 'axios';
import { HOST } from './config';


export async function getLateLoanPayers(branch_code) {
  try {
    const response = await axios.get(`${HOST}/late_installment/${branch_code}`);
    return response.data;
  } catch (err) {
    console.log(err);
    return await Promise.reject('Failed to get late loan payers!');
  }
}

// need to change this to post the branch code for matching purposes
export async function sendBranchCode(branch_code) {
  try {
    const response = await axios.post(`${HOST}/late_installment/add`,branch_code);
    console.log(response);
  } catch (err) {
    console.log(err);
    return await Promise.reject('Invalid Branch Code');
  }
}