import React, {FC} from "react";
import {Formik, Field, ErrorMessage} from "formik";
import * as Yup from "yup";
import {EmailsCreated,useGetEmails} from "@lib/system-design";
import {Button, Dialog} from "@mui/material";
import styled from "styled-components";

interface ContactUsProps {
  onSubmit: (values: EmailsCreated) => void;
  handleClose: () => void;
  isOpen: boolean;
}

const EmailForm: FC<ContactUsProps> = ({onSubmit,isOpen,handleClose}) => {
  const {data: emails} = useGetEmails();
  const initialValues = {
    subject: "",
    message: "",
  }
  const validationSchema = Yup.object({
    subject: Yup.string().required('Required'),
    message: Yup.string().max(500, "Must be 500 characters or less").required('Required'),
  })
  const emailsToString = emails?.map((email) => email?.email).join(", ");
  return (
    <Dialog maxWidth="sm" fullWidth open={isOpen} onClose={handleClose}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={ (values, {setSubmitting,resetForm}) => {
           onSubmit({
            ...values,
            email:emailsToString
          });
          setSubmitting(false);
          resetForm();
        }
        }
      >
        {({isSubmitting,handleSubmit}) => (
          <StyledForm onSubmit={handleSubmit}>
              <label htmlFor="subject">Subject</label>
              <Field
                as="textarea"
                id="subject"
                name="subject"
              />
              <ErrorMessage name="subject"/>
              <label htmlFor="message">Message</label>
              <Field
                as="textarea"
                id="message"
                name="message"
              />
              <ErrorMessage name="message"/>
  <div style={{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  }}>
            <StyledButton type="submit" disabled={isSubmitting}>
             Send
            </StyledButton>
  </div>
          </StyledForm>
        )}
      </Formik>
    </Dialog>
  );
}
export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  height: 30vh;
  gap: 1rem;
  padding: 1rem;
`;

const StyledButton = styled(Button)`
  border-radius: 25px;
  width: 200px;
  background: #3f51b5;
  color: white;

  &:hover {
    background-color: white;
    color: #3f51b5;
  }
`;
export default EmailForm;
