import axios from 'axios';
import { environment } from '../environment/environment';

const version = 'v1';

// here is an example instance for every endpoint
export const backendInstance = axios.create({
  // .. configure axios baseURL
  baseURL: `${environment.BACKEND}/${version}`,
});
