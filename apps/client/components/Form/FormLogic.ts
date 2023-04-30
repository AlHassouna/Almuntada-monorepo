import {postContact} from "@lib/system-design";

export const FormLogic = () => {
  const onSubmit = async (data) => {
    const res = await postContact(data);
    return res;
  };

  return {onSubmit};

}


