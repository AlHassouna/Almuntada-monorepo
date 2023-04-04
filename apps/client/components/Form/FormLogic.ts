import {usePostContactMutation} from "@lib/system-design";

export const FormLogic = () => {
  const {mutate} = usePostContactMutation();
  const onSubmit = async (data) => {
    await mutate(data);
  };

  return {onSubmit};

}


