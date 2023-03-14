import React,{FC} from "react";
import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import {StyledHeading,StyledForm} from "../../styled/contact-us.styled"
import {ContactUsCreated} from "../../API/contact-us/types";

interface ContactUsProps {
  onSubmit: (values: ContactUsCreated) => void;
}

const ContactForm: FC<ContactUsProps> = ({ onSubmit }) => {

  const initialValues: ContactUsCreated = {
    fullName: "",
    email: "",
    subject: "",
    message: "",
  }

  const validationSchema = Yup.object({
    fullName: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email address").required("Required"),
    subject: Yup.string().required("Required"),
    message: Yup.string().max(500,"Must be 500 characters or less").required("Required"),
  })

  return (
    <div>
      <StyledHeading>Contact Us</StyledHeading>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={values => onSubmit(values)}
      >
        {({ isSubmitting }) => (
          <StyledForm>
            <div>
              <label htmlFor="fullName">Full Name</label>
              <Field
                name="fullName"
                id="fullName"
              >

              </Field>
              <ErrorMessage name="fullName" />
            </div>

            <div>
              <label htmlFor="email">Email</label>
              <Field
                type="email"
                id="email"
                name="email"
              />
              <ErrorMessage name="email" />
            </div>

            <div>
              <label htmlFor="subject">Subject</label>
              <Field
                as="select"
                id="subject"
                name="subject"
              >
                <option value=""></option>
                <option value="Support">Support</option>
                <option value="Sales">Sales</option>
                <option value="General Inquiry">General Inquiry</option>
              </Field>
              <ErrorMessage name="subject" />
            </div>

            <div>
              <label htmlFor="message">Message</label>
              <Field
                as="textarea"
                id="message"
                name="message"
              />
              <ErrorMessage name="message" />
            </div>

            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </StyledForm>
        )}
      </Formik>
    </div>
  );
}

export default ContactForm;
