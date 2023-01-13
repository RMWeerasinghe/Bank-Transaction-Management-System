import axios from 'axios';
import { HOST } from './config';


export async function getUser(customer_id) {
  try {
    const response = await axios.get(`${HOST}/customer/${customer_id}`);
    return response.data;
  } catch (err) {
    console.log(err);
    return await Promise.reject('Failed to get the user info!');
  }
}