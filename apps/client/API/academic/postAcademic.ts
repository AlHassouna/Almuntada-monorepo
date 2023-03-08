import {academicInstance} from '../api';
import {useQuery} from '@tanstack/react-query';
import {AcademicCreated, IAcademic} from "./types";

const postAcademic = async (data: AcademicCreated): Promise<IAcademic> => {
  return await academicInstance.post('/users/register', data);
};

export const usePostAcademic = (data: AcademicCreated, auth?: string) => {
  return useQuery<object, Error>(['academic'], () => postAcademic(data));
};
