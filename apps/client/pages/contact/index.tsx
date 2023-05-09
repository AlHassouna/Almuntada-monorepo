import {FC, useEffect, useState} from "react";
import ContactForm from "../../components/Form/Form";
import {FormLogic} from "../../components/Form/FormLogic";

const ContactUs: FC = () => {
  const geDetailsUrl = process.env.NEXT_PUBLIC_API_DETAILS_URL
  // const [details, setDetails] = useState()
  // useEffect(() => {
  //   fetch(geDetailsUrl)
  //     .then(res => res.json())
  //     .then(data => {
  //       setDetails({
  //         ...data,
  //         pathname: window.location.pathname,
  //         userAgent: window.navigator.userAgent
  //
  //       })
  //     })
  //     .catch(err => console.log(err))
  // }, [])
  const {onSubmit} = FormLogic();
  return (
    <ContactForm onSubmit={onSubmit}/>
  );
};

export default ContactUs;
