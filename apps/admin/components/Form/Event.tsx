import React, {FC} from "react";
import {Formik, Field, ErrorMessage} from "formik";
import * as Yup from "yup";
import {EventCreated, FileUpload, useGetEvents} from "@lib/system-design";
import {Button, Dialog, TextField} from "@mui/material";
import styled from "styled-components";
import {Date} from '@lib/system-design'
import dayjs from "dayjs";

interface EventProps {
    onSubmit: (values: EventCreated) => void;
    handleClose: () => void;
    isOpen: boolean;
}

const EventForm: FC<EventProps> = ({onSubmit, isOpen, handleClose}) => {
    const {data: events} = useGetEvents();

    const initialValues = {
        name: "",
        information: "",
        location: "",
        organizer: "",
        dateOfEvent: undefined,
        image: "",

    }
    // const validationSchema = Yup.object({
    //     subject: Yup.string().required('Required'),
    //     message: Yup.string().max(500, "Must be 500 characters or less").required('Required'),
    // })
    // const emailsToString = emails?.map((email) => email?.email).join(", ");
    return (
        <Dialog fullWidth fullScreen open={isOpen} onClose={handleClose}>
            <Formik
                initialValues={initialValues}
                onSubmit={(values, {setSubmitting, resetForm}) => {
                    onSubmit({
                        ...values,
                    });
                    setSubmitting(false);
                    resetForm();
                }
                }
            >
                {({isSubmitting, handleSubmit, values, setFieldValue}) => (
                    <StyledForm onSubmit={handleSubmit}>
                        <label htmlFor="subject">Event Name</label>
                        <Field
                            as={TextField}
                            id="name"
                            name="name"
                        />
                        <ErrorMessage name="name"/>
                        <label htmlFor="message">Information</label>
                        <Field
                            as={TextField}
                            id="information"
                            name="information"
                        />
                        <ErrorMessage name="information"/>
                        <label htmlFor="subject">Location</label>
                        <Field
                            as={TextField}
                            id="location"
                            name="location"
                        />
                        <ErrorMessage name="location"/>
                        <label htmlFor="message">Organizer</label>
                        <Field
                            as={TextField}
                            id="organizer"
                            name="organizer"
                        />
                        <ErrorMessage name="organizer"/>
                        <label htmlFor="subject">Date of Event</label>
                        <Field
                            as={Date}
                            value={dayjs(values.dateOfEvent)}
                            setValue={setFieldValue}
                            id="dateOfEvent"
                            name="dateOfEvent"
                        />
                        <ErrorMessage name="dateOfEvent"/>
                        <label htmlFor="message">Hero Image</label>
                        <Field
                            as={FileUpload}
                            value={values.image}
                            setFiledValue={setFieldValue}
                            id="image"
                            name="image"
                        />
                        <ErrorMessage name="image"/>

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
export default EventForm;
