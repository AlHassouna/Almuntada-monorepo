import {
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField
} from "@mui/material";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import {Formik, Field, ErrorMessage} from "formik";
import {FC, useState} from "react";
import * as Yup from "yup";
import {useIntl} from "react-intl";
import {useLocale} from "@lib/system-design";
import {StyledForm} from "../../styled/academics.styled";
import styled from "styled-components";
import {AutoComplete, GenericSelect} from "@lib/system-design";
import {DataToSelectOptions, DegreeToSelectOptions} from "@lib/shared-hooks";
import {getCityList} from "@lib/shared-types";
import {FileUpload} from '@lib/system-design'
import {Date} from '@lib/system-design'
import * as React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import {green} from "@mui/material/colors";
import Button from "@mui/material/Button";
import CheckIcon from '@mui/icons-material/Check';
import Box from '@mui/material/Box';
import dayjs from 'dayjs'
import {Alerts} from '@lib/system-design'
import {Close as CloseIcon} from '@mui/icons-material';
import {IconButton} from '@mui/material';
import {ListOptions} from "./optionAcademic";
import {degrees} from './degrees.consts'
import {FieldContainer, FieldC} from "../../styled/academics.styled";
import Link from 'next/link'

interface Props {
  handleClose: () => void;
  OnSubmit: (data) => void;
  isOpen: boolean;
}


export const AcademicDialog: FC<Props> = ({OnSubmit, handleClose, isOpen}) => {
    const initialValues = {
      firstName: "",
      lastName: "",
      age: undefined,
      phone: "",
      imageUrl: "",
      email: "",
      city: "",
      subject: "",
      career: "",
      gender: "",
      company: "",
      linkedIn: "",
      facebook: "",
      isAgree: false,
    };

    const genderList = [
      {
        id: 1,
        name: "Male"
      },
      {
        id: 2,
        name: "Female"
      }
    ];
    const genderOption = DataToSelectOptions(genderList, "name", "id");
    const citiesOption = DataToSelectOptions(getCityList, "label", "label");
    const degreeOption = DegreeToSelectOptions(degrees, "english", "hebrew", "arabic");
    const genericImage = 'https://res.cloudinary.com/dieieuuby/image/upload/v1687254047/Generic-profile-picture_bbeusm.webp'
    const intl = useIntl();
    const {companiesOptions, careersOptions} = ListOptions();
    const required = intl.messages["academicpage.dialog.required"];
    const nameRegexWithSpaces = /^[a-zA-Z ]+$/;
    const subjectsRegex = /^[a-zA-Z &]+$/;
    const phoneRegex = /^[0-9]{10}$/;
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    const [data, setData] = useState<any>([]);
    const validationSchema = Yup.object().shape({
      firstName: Yup.string().matches(nameRegexWithSpaces, "Only English letters").required(String(required)),
      lastName: Yup.string().matches(nameRegexWithSpaces, "Only English letters").required(String(required)),
      email: Yup.string().email("Invalid email address").matches(emailRegex, "Only English letters").required(String(required)),
      phone: Yup.string().matches(phoneRegex, "Invalid phone number").required(String(required)),
      city: Yup.string().ensure().required(String(required)),
      subject: Yup.string().ensure().required(String(required)),
      career: Yup.string().matches(subjectsRegex, "Only English letters").required(String(required)),
      age: Yup.string().required(String(required)),
      company: Yup.string().matches(subjectsRegex, "Only English letters").required(String(required)),
      imageUrl: Yup.string().optional(),
      gender: Yup.string().required(String(required)),
      facebook: Yup.string().optional(),
      linkedIn: Yup.string().optional(),
    });
    const locale = useLocale();
    const [loading, setLoading] = React.useState(false);
    const timer = React.useRef<number>();
    React.useEffect(() => {
      return () => {
        clearTimeout(timer.current);
      };
    }, []);

    const onSubmit = async (values) => {
      if (!loading) {
        setLoading(true);
        const res = await OnSubmit({
          ...values,
          email: values.email.toLowerCase(),
        })
        setData(res)
        timer.current = window.setTimeout(() => {
          setLoading(false);
        })
        timer.current = window.setTimeout(() => {
          setData([])
        }, 2000)

      }
    }
    return (
      <JoinUsContainer>
        <DialogTitle>{intl.messages["academicpage.dialog.title"]}</DialogTitle>
        <IconButton
          edge="end"
          color="inherit"
          onClick={handleClose}
          aria-label="close"
          sx={{
            position: 'absolute',
            ...(locale === 'en' && {
              right: 10,
            }),
            ...((locale === 'ar' || locale === 'he') && {
              left: 0,
            })
            ,
            top: theme => theme.spacing(1),
          }}
        >
          <CloseIcon/>
        </IconButton>
        <DialogContent>
          <DialogContentText>
            {intl.messages["academicpage.dialog.sub.title"]}
          </DialogContentText>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={async (values) => {
              if (values.imageUrl === "") {
                values.imageUrl = genericImage
              }
              await onSubmit(values);
              setTimeout(() => {
                window.location.href = '/'
              }, 2000)
            }}
          >
            {(props) => {
              return (
                <StyledForm
                  onSubmit={props.handleSubmit}>
                  <FieldC>
                    <Field name="firstName" type="text" as={TextField}
                           sx={{
                             "& label": {
                               right: locale === 'en' ? 'unset' : '35px',
                               transformOrigin: locale === 'en' ? 'left' : 'right',
                             },
                             "& legend": {
                               textAlign: locale === 'en' ? 'left' : 'right',
                             }
                           }}
                           label={intl.messages["academicpage.dialog.first.name"]}/>
                    <ErrorMessage name="firstName"/>
                  </FieldC>
                  <FieldC>
                    <Field name="lastName" type="text" as={TextField}
                           sx={{
                             "& label": {
                               right: locale === 'en' ? 'unset' : '35px',
                               transformOrigin: locale === 'en' ? 'left' : 'right',
                             },
                             "& legend": {
                               textAlign: locale === 'en' ? 'left' : 'right',
                             }
                           }}
                           label={intl.messages["academicpage.dialog.last.name"]}/>
                    <ErrorMessage name="lastName"/>
                  </FieldC>

                  <FieldC>
                    <Field name="age" as={Date}
                           value={dayjs(props.values.age)}
                           setValue={props.setFieldValue}
                           locale={locale}
                           label={intl.messages["academicpage.dialog.age"]}/>
                    <ErrorMessage name="age"/>
                  </FieldC>
                  <FieldC>

                    <Field name="email" type="email" as={TextField}
                           sx={{
                             "& label": {
                               right: locale === 'en' ? 'unset' : '35px',
                               transformOrigin: locale === 'en' ? 'left' : 'right',
                             },
                             "& legend": {
                               textAlign: locale === 'en' ? 'left' : 'right',
                             }
                           }}
                           label={intl.messages["academicpage.dialog.email"]}/>
                    <ErrorMessage name="email"/>
                  </FieldC>
                  <FieldC>

                    <Field name="city" as={AutoComplete}
                           setFieldValue={props.setFieldValue}
                           data={citiesOption}
                           freeSolo={false}
                           handleBlur={props.handleBlur}
                           value={props.values.city}
                           label={intl.messages["academicpage.dialog.city"]}></Field>
                    <ErrorMessage name="city"/>
                  </FieldC>
                  <FieldC>

                    <Field name="subject" as={AutoComplete} value={props.values.subject}
                           locale={locale}
                           setFieldValue={props.setFieldValue}
                           data={degreeOption}
                           isDegree={true}
                           label={intl.messages["academicpage.dialog.degree"]}/>
                    <ErrorMessage name="degree"/>
                  </FieldC>
                  <FieldC>

                    <Field name="career" as={AutoComplete} value={props.values.career}
                           addNew={intl.messages["addNewLine"]}
                           helperText={intl.messages["helperText"]}
                           locale={locale}
                           setFieldValue={props.setFieldValue}
                           freeSolo={true}
                           data={careersOptions} label={intl.messages["academicpage.dialog.job"]}/>
                    <ErrorMessage name="career"/>
                  </FieldC>
                  <FieldC>

                    <Field name="company" as={AutoComplete} value={props.values.company}
                           addNew={intl.messages["addNewLine"]}
                           helperText={intl.messages["helperText"]}
                           locale={locale}
                           setFieldValue={props.setFieldValue}
                           data={companiesOptions}
                           freeSolo={true}
                           label={intl.messages["academicpage.dialog.company"]}/>
                    <ErrorMessage name="company"/>
                  </FieldC>
                  <FieldC>

                    <Field name="gender" as={GenericSelect}
                           locale={locale}
                           data={genderOption}
                           label={intl.messages["academicpage.dialog.sex"]} value={props.values.gender}
                           onBlur={props.handleBlur}
                           onChange={props.handleChange}/>
                    <ErrorMessage name="gender"/>
                  </FieldC>
                  <FieldC>

                    <Field name="phone" type='text' as={TextField}
                           sx={{
                             "& label": {
                               right: locale === 'en' ? 'unset' : '35px',
                               transformOrigin: locale === 'en' ? 'left' : 'right',
                             },
                             "& legend": {
                               textAlign: locale === 'en' ? 'left' : 'right',
                             }
                           }}
                           label={intl.messages["academicpage.dialog.phone"]}/>
                    <ErrorMessage name="phone"/>
                  </FieldC>
                  <FieldC>

                    <Field name="linkedIn" type='text' as={TextField}
                           sx={{
                             "& label": {
                               right: locale === 'en' ? 'unset' : '35px',
                               transformOrigin: locale === 'en' ? 'left' : 'right',
                             },
                             "& legend": {
                               textAlign: locale === 'en' ? 'left' : 'right',
                             }
                           }}
                           label={intl.messages["academicpage.dialog.linkedIn"]}/>
                    <ErrorMessage name="linkedIn"/>
                  </FieldC>
                  <FieldC>

                    <Field name="facebook" type='text' as={TextField}
                           sx={{
                             "& label": {
                               right: locale === 'en' ? 'unset' : '35px',
                               transformOrigin: locale === 'en' ? 'left' : 'right',
                             },
                             "& legend": {
                               textAlign: locale === 'en' ? 'left' : 'right',
                             }
                           }}
                           label={intl.messages["academicpage.dialog.facebook"]}/>
                    <ErrorMessage name="facebook"/>
                  </FieldC>

                  <FieldContainer>
                    <Field name="imageUrl" as={FileUpload}
                           desc={intl.messages["uploadPhoto.desc"]}
                           value={props.values.imageUrl}
                           setFiledValue={props.setFieldValue}
                           label={intl.messages["academicpage.dialog.imageurl"]}/>
                    <ErrorMessage name="imageUrl"/>
                  </FieldContainer>
                  <FieldContainer>
                    <Field type="checkbox" name="isAgree" as={FormGroup}>
                      <FormControlLabel
                        control={<Checkbox checked={props.values.isAgree}
                                           onChange={() => props.setFieldValue('isAgree', !props.values.isAgree)}
                                           name="isAgree"/>}
                        label={intl.messages["academicpage.dialog.checkbox"]}
                      />
                    </Field>
                  </FieldContainer>
                  <FieldContainer>
                    <Box
                      sx={{display: "flex", justifyContent: "center"}}>
                      {loading ? (
                          <CircularProgress
                            size={25}
                            sx={{
                              color: green[500],
                              position: 'absolute',
                              top: '50%',
                              left: '50%',
                              marginTop: '-12px',
                              marginLeft: '-12px',
                            }}
                          />
                        ) :
                        data?.data?.status === 201 ? <CheckIcon/> :
                          <Button
                            type="submit"
                            disabled={!props.values.isAgree}
                            sx={data?.data?.status === 201 ? {
                              bgcolor: green[500] + '!important',
                              padding: '10px 20px',
                              borderRadius: '24px!important',
                              '&:hover': {
                                bgcolor: green[700] + '!important',
                              }
                            } : {
                              bgcolor: '#3f51b5!important',
                              color: 'white',
                              padding: '10px 20px',
                              width: '200px',
                              borderRadius: '24px!important',
                              '&:hover': {
                                bgcolor: '#303f9f!important',
                              }
                            }
                            }
                          >
                            {intl.messages["academicpage.dialog.button"]}
                          </Button>
                      }
                    </Box>
                  </FieldContainer>
                </StyledForm>
              );
            }}
          </Formik>
        </DialogContent>
        {
          <Alerts success={intl.messages["academicpage.dialog.success"] as string}
                  error={intl.messages["academicpage.dialog.error"] as string}
                  email={intl.messages["academicpage.dialog.error.email"] as string} status={data?.data?.status}/>
        }
      </JoinUsContainer>

      // </StyledDialog>
    );
  }
;

const JoinUsContainer = styled.div`
  direction: ${(props) => props.className === "en" ? "ltr" : "rtl"};
  padding-top: 100px;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
