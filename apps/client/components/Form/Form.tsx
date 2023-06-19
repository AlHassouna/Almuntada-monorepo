import React, {FC} from "react";
import {Formik, Field, ErrorMessage} from "formik";
import * as Yup from "yup";
import {StyledHeading, StyledForm} from "../../styled/contact-us.styled"
import {ContactUsCreated} from "@lib/system-design";
import {useIntl} from "react-intl";
import {MainSection} from "../../styled/global.styled";
import Head from "next/head";
import {Alerts} from '@lib/system-design'
import {MainContainer} from "../../styled/home.styled";

interface ContactUsProps {
  onSubmit: (values: ContactUsCreated) => void;
}

const ContactForm: FC<ContactUsProps> = ({onSubmit}) => {

  const intl = useIntl();
  const title = intl.formatMessage({id: 'page.home.head.title'});
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
  const [response, setResponse] = React.useState<any>();
  const subjects = intl.messages['contactpage.subjects'] as unknown as Array<{
    name: string;
  }>;
  return (
    <MainContainer>
      <Head>
        <meta property='og:image'
              content='https://res.cloudinary.com/dieieuuby/image/upload/v1687169761/FinalLogo_jwfwun.png'/>
        <title>{title}</title>
      </Head>
      <div className='flex flex-col justify-center h-[100vh] '>
        <StyledHeading>{intl.formatMessage({id: 'contactpage.title'})}</StyledHeading>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={async (values, {setSubmitting, resetForm}) => {
            const res = await onSubmit(values);
            setResponse(res)
            setSubmitting(false);
            resetForm();
          }
          }
        >
          {({isSubmitting, handleSubmit}) => (
            <StyledForm onSubmit={handleSubmit}>
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
        <div className='fixed bottom-0 w-full'>
          <Alerts success={intl.messages["contactpage.contact.success"] as string}
                  error={intl.messages["contactpage.contact.error"] as string} status={response?.status}/>
        </div>
      </div>
    </MainContainer>

  );
}

export default ContactForm;
