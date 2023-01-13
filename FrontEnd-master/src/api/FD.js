import axios from 'axios';
import { HOST } from './config';
import { getDate } from '../utilities/dateFormat';

export async function getFDCustomers() {
  try {
    const response = await axios.get(`${HOST}/fixed_deposit`);
    // change full date string to ISO format, yyyy-MM-DD
    //there are two dates and consider it and change if necessary
    for (let key in response.data) {
      const newDate = getDate(response.data[key].date_opened);
      response.data[key].date_opened = newDate;
      const newDate2 = getDate(response.data[key].maturity_date);
      response.data[key].maturity_date = newDate2;
    }
    return response.data;
  } catch (err) {
    console.log(err);
    return await Promise.reject('Failed to get FDcustomers list!');
  }
}

export async function addFDCustomer(newFDCustomer) {
  try {
    const response = await axios.post(`${HOST}/fixed_deposit`, newFDCustomer);
    console.log(response);
  } catch (err) {
    console.log(err);
    return await Promise.reject('Failed to add to FDcustomers list!');
  }
}

export async function getFDCustomer(fd_id) {
  try {
    const response = await axios.get(`${HOST}/fixed_deposit/${fd_id}`);
    // console.log(response.data);
    //there are two dates
    response.data.date_opened = getDate(response.data.date_opened);
    response.data.maturity_date = getDate(response.data.maturity_date);
    return response.data;
  } catch (err) {
    console.log(err);
    return await Promise.reject('Failed to get the customer!');
  }
}