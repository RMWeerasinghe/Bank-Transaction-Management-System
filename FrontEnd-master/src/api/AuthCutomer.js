import axios from 'axios';
import { HOST } from './config';

export async function loginCustomer(newLogin) {
    try {
      const response = await axios.post(`${HOST}/customer`, newLogin);
      console.log(response);
    } catch (err) {
      console.log(err);
      return await Promise.reject('Invalid Customer ID or Password !');
    }
  }