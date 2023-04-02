import {usePostPimagesMutation} from "../../API/pimages/postPimages";

export const PimagesLogic = () => {
  const {mutate} = usePostPimagesMutation();
  const onSubmit = async (data) => {
    await mutate(data);
  };
  return {onSubmit};

}


