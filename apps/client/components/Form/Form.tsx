import React, {FC} from "react";
import {Formik, Field, ErrorMessage} from "formik";
import * as Yup from "yup";
import {StyledHeading, StyledForm} from "../../styled/contact-us.styled"
import {ContactUsCreated} from "../../../../libs/system-design/src/lib/API/contact-us/types";
import {useIntl} from "react-intl";


interface ContactUsProps {
  onSubmit: (values: ContactUsCreated) => void;
}

const ContactForm: FC<ContactUsProps> = ({onSubmit}) => {

  const intl = useIntl();
  const required = intl.messages['contactpage.required'] as string;
  const initialValues: ContactUsCreated = {
    fullName: "",
    email: "",
    subject: "",
    message: "",
  }
  const validationSchema = Yup.object({
    fullName: Yup.string().required(String(required)),
    email: Yup.string().email("Invalid email address").required(String(required)),
    subject: Yup.string().required(String(required)),
    message: Yup.string().max(500, "Must be 500 characters or less").required(String(required)),
  })

  const subjects = intl.messages['contactpage.subjects'] as unknown as Array<{
    name: string;
  }>;
  return (
    <div className='h-[80vh] '>
      <StyledHeading>{intl.formatMessage({id: 'contactpage.title'})}</StyledHeading>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={values => onSubmit(values)}
      >
        {({isSubmitting}) => (
          <StyledForm>
            <div>
              <label htmlFor="fullName">{intl.formatMessage({id: 'contactpage.fullname'})}</label>
              <Field
                name="fullName"
                id="fullName"
              >

              </Field>
              <ErrorMessage name="fullName"/>
            </div>

            <div>
              <label htmlFor="email">{intl.formatMessage({id: 'contactpage.email'})}</label>
              <Field
                type="email"
                id="email"
                name="email"
              />
              <ErrorMessage name="email"/>
            </div>

            <div>
              <label htmlFor="subject">{intl.formatMessage({id: 'contactpage.subject'})}</label>
              <Field
                as="select"
                id="subject"
                name="subject"
              >
                {
                  subjects.map((subject, index) => {
                    return <option key={index} value={subject.name}>{subject.name}</option>
                  })
                }
              </Field>
              <ErrorMessage name="subject"/>
            </div>

            <div>
              <label htmlFor="message">{intl.formatMessage({id: 'contactpage.message'})}</label>
              <Field
                as="textarea"
                id="message"
                name="message"
              />
              <ErrorMessage name="message"/>
            </div>

            <button type="submit" disabled={isSubmitting}>
              {intl.formatMessage({id: 'contactpage.submit'})}
            </button>
          </StyledForm>
        )}
      </Formik>
    </div>
  );
}

export default ContactForm;
