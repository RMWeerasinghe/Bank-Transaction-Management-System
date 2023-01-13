import axios from 'axios';
import { HOST } from './config';


export async function getPortfolio(customer_id) {
  try {
    const response = await axios.get(`${HOST}/customer_account/${customer_id}`);
    return response.data;
  } catch (err) {
    console.log(err);
    return await Promise.reject('Failed to get the user info!');
  }
}