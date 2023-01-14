import axios from 'axios';
import { HOST } from './config';

export async function loginBranchManager(newLogin) {
    try {
        //info
      const response = await axios.post(`${HOST}/branch_manager_login`, newLogin);
      console.log(response);
    } catch (err) {
      console.log(err);
      return await Promise.reject('Invalid Employee ID or Password !');
    }
  }