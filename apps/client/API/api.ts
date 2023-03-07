import axios from 'axios';
import { environment } from '../environment/environment';
const version = 'v1';

// here is an example instance for every endpoint
export const podcastInstance = axios.create({
  // .. configure axios baseURL
  baseURL: `${environment.PODCAST}/${version}/`,
});

export const academicInstance = axios.create({
  baseURL: `${environment.ACADEMIC}/${version}/`,
});
