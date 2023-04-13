import axios from 'axios';
import {environment} from '../../../../../environment/environment';

const version = 'v1';
export const backendInstance = axios.create({
  // .. configure axios baseURL
  baseURL: `${process.env.NEXT_PUBLIC_API_URL}/${version}`,
});
