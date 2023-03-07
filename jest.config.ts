import { getJestProjects } from '@nrwl/jest';
export default {
  projects: getJestProjects(),
  preset: 'ts-jest',
  testEnvironment: 'node',
  roots: ['<rootDir>/apps'],
  moduleDirectories: ['node_modules'],
};
