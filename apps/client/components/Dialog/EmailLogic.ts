import {usePostConfirmationEmailMutation} from "@lib/system-design";

export const EmailLogic = () => {
  const {mutate} = usePostConfirmationEmailMutation();
  const sendConfirmEmail = async (data) => {
    await mutate(data);
  };

  return {
    sendConfirmEmail,
  };

}


