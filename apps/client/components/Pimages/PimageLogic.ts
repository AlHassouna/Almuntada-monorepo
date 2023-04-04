import {usePostPimagesMutation} from "@lib/system-design";

export const PimagesLogic = () => {
  const {mutate} = usePostPimagesMutation();
  const onSubmit = async (data) => {
    await mutate(data);
  };
  return {onSubmit};

}


