import {FC} from "react";
import ContactForm from "../../components/Form/Form";
import {FormLogic} from "../../components/Form/FormLogic";

const ContactUs: FC = () => {
  const {onSubmit} = FormLogic();
  return (
    <ContactForm onSubmit={onSubmit}/>
  );
};

export default ContactUs;
