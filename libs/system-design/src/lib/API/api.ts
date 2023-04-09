import axios from 'axios';
import {environment} from './environment/environment';

const version = 'v1';

console.log("environment.apiUrl", environment.apiUrl);
export const backendInstance = axios.create({
  // .. configure axios baseURL
  baseURL: `${environment.apiUrl}/${version}`,
});
