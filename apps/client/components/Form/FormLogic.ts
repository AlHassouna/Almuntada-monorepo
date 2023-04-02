import {usePostContactMutation} from "../../API/contact-us/postContact";

export const FormLogic = () => {
  const {mutate} = usePostContactMutation();
  const onSubmit = async (data) => {
    await mutate(data);
  };

  return {onSubmit};

}


