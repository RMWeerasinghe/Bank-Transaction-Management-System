import axios from 'axios';
import { HOST } from './config';

 //last change
 export async function loginEmployee(newLogin) {
    try {
      const response = await axios.post(`${HOST}/employee`, newLogin);
      console.log(response);
    } catch (err) {
      console.log(err);
      return await Promise.reject('Invalid Employee ID or Password !');
    }
  }
