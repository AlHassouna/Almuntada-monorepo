import {academicInstance} from "../api";
import {useQuery} from "@tanstack/react-query";


const getPodcast = ()=>{
  return academicInstance.put('/example',)
}

export const useGetPodcast = (auth?: string)=>{
  return useQuery<object, Error>(['academic'],getPodcast)
}
