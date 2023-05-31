import axios from 'axios';


const version = 'v1';
export const backendInstance = axios.create({
  // .. configure axios baseURL
  baseURL: `${process.env.NEXT_PUBLIC_API_URL}/${version}`,
});
