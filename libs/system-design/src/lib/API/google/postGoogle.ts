import {useMutation, useQueryClient} from "@tanstack/react-query";
import {ILocationResult, ILocationProps} from "./type";
import {googleInstance} from "../api";


export const getAddress = async (data: ILocationProps): Promise<ILocationResult> => {
  const {latitude, longitude} = data
  return (await googleInstance.post(`json?latlng=${latitude},${longitude}&key=${process.env.NEXT_PUBLIC_GOOGLE_API_KEY}`)).data;
}


// There is a problem with queryClientProvider because the provider is in the _app.tsx file
// export const usePostGoogleMutation = () => {
//   const queryClient = useQueryClient();
//   return useMutation(['googleAPI'], (data: ILocationProps) => getAddress(data), {
//     onSuccess: () => {
//       queryClient.invalidateQueries({queryKey: ['googleAPI']});
//     },
//   })
// }
