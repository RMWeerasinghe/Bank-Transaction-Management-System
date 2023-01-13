import axios from 'axios';
import { HOST } from './config';

export async function loginBranchManager(newLogin) {
    try {
      const response = await axios.post(`${HOST}/branch_manager_info`, newLogin);
      console.log(response);
    } catch (err) {
      console.log(err);
      return await Promise.reject('Invalid Employee ID or Password !');
    }
  }