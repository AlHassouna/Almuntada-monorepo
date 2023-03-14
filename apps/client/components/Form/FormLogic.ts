import {usePostContactMutation} from "../../API/contact-us/postContact";
import {ContactUsCreated,ContactUsField} from "../../API/contact-us/types";
import {useState} from "react";

export const FormLogic =() => {
  const {mutate} = usePostContactMutation();
  const onSubmit =  async (data) => {
     await mutate(data);
  };

  return {onSubmit};

}


