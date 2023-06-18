import {
  Dialog,
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
import {ListOptions} from "./optionAcademic";
import {DataToSelectOptions} from "@lib/shared-hooks";
import {getDegreeList} from "@lib/shared-types";
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
      degree: "",
      subject: "",
      career: "",
      gender: "",
      company: "",
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
    const degreeOption = DataToSelectOptions(getDegreeList, "name", "id");
    const citiesOption = DataToSelectOptions(getCityList, "label", "label");
    const intl = useIntl();
    const {subjectsOptions, companiesOptions, careersOptions} = ListOptions();
    const required = intl.messages["academicpage.dialog.required"];
    const nameRegexWithSpaces = /^[a-zA-Z ]+$/;
    const phoneRegex = /^[0-9]{10}$/;
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    const [data, setData] = useState<any>([]);
    const validationSchema = Yup.object().shape({
      firstName: Yup.string().matches(nameRegexWithSpaces, "Only English letters").required(String(required)),
      lastName: Yup.string().matches(nameRegexWithSpaces, "Only English letters").required(String(required)),
      email: Yup.string().email("Invalid email address").matches(emailRegex, "Only English letters").required(String(required)),
      phone: Yup.string().matches(phoneRegex, "Invalid phone number").required(String(required)),
      city: Yup.string().ensure().required(String(required)),
      degree: Yup.string().matches(nameRegexWithSpaces, "Only English letters").required(String(required)),
      subject: Yup.string().matches(nameRegexWithSpaces, "Only English letters").required(String(required)),
      career: Yup.string().matches(nameRegexWithSpaces, "Only English letters").required(String(required)),
      age: Yup.string().required(String(required)),
      company: Yup.string().matches(nameRegexWithSpaces, "Only English letters").required(String(required)),
      imageUrl: Yup.string().required(String(required)),
      gender: Yup.string().required(String(required)),
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
      <StyledDialog maxWidth="sm" fullWidth open={isOpen} onClose={handleClose} className={locale}
      >
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
              await onSubmit(values);
            }}
          >
            {(props) => {
              return (
                <StyledForm onSubmit={props.handleSubmit}>
                  <Field name="firstName" type="text" as={TextField}
                         label={intl.messages["academicpage.dialog.first.name"]}/>
                  <ErrorMessage name="firstName"/>
                  <Field name="lastName" type="text" as={TextField}
                         label={intl.messages["academicpage.dialog.last.name"]}/>
                  <ErrorMessage name="lastName"/>
                  <Field name="age" as={Date}
                         value={dayjs(props.values.age)}
                         setValue={props.setFieldValue}
                         label={intl.messages["academicpage.dialog.age"]}/>
                  <ErrorMessage name="age"/>
                  <Field name="email" type="email" as={TextField} label={intl.messages["academicpage.dialog.email"]}/>
                  <ErrorMessage name="email"/>
                  <Field name="city" as={AutoComplete}
                         setFieldValue={props.setFieldValue}
                         data={citiesOption}
                         freeSolo={false}
                         handleBlur={props.handleBlur}
                         value={props.values.city}
                         label={intl.messages["academicpage.dialog.city"]}></Field>
                  <ErrorMessage name="city"/>
                  <Field name="degree" as={GenericSelect} label={intl.messages["academicpage.dialog.degree"]}
                         data={degreeOption}
                         value={props.values.degree} onChange={props.handleChange}/>
                  <ErrorMessage name="degree"/>
                  <Field name="subject" as={AutoComplete} value={props.values.subject}
                         setFieldValue={props.setFieldValue}
                         data={subjectsOptions}
                         freeSolo={true}
                         label={intl.messages["academicpage.dialog.subject"]}/>
                  <ErrorMessage name="subject"/>
                  <Field name="company" as={AutoComplete} value={props.values.company}
                         setFieldValue={props.setFieldValue}
                         data={companiesOptions}
                         freeSolo={true}
                         label={intl.messages["academicpage.dialog.company"]}/>
                  <ErrorMessage name="company"/>
                  <Field name="career" as={AutoComplete} value={props.values.career}
                         setFieldValue={props.setFieldValue}
                         freeSolo={true}
                         data={careersOptions} label={intl.messages["academicpage.dialog.job"]}/>
                  <ErrorMessage name="career"/>
                  <Field name="gender" as={GenericSelect}
                         data={genderOption}
                         label={intl.messages["academicpage.dialog.sex"]} value={props.values.gender}
                         onBlur={props.handleBlur}
                         onChange={props.handleChange}/>
                  <ErrorMessage name="gender"/>
                  <Field name="phone" type='text' as={TextField}
                         label={intl.messages["academicpage.dialog.phone"]}/>
                  <ErrorMessage name="phone"/>
                  <Field name="imageUrl" as={FileUpload}
                         value={props.values.imageUrl}
                         setFiledValue={props.setFieldValue}
                         label={intl.messages["academicpage.dialog.imageurl"]}/>
                  <ErrorMessage name="imageUrl"/>
                  <Field type="checkbox" name="isAgree" as={FormGroup}>
                    <FormControlLabel
                      control={<Checkbox checked={props.values.isAgree}
                                         onChange={() => props.setFieldValue('isAgree', !props.values.isAgree)}
                                         name="isAgree"/>}
                      label={intl.messages["academicpage.dialog.checkbox"]}
                    />
                  </Field>
                  <div className="flex justify-center items-center">
                    <Box sx={{m: 1, position: 'relative'}}>
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
                              width: '10vw!important',
                              borderRadius: '24px!important',
                              '&:hover': {
                                bgcolor: green[700] + '!important',
                              }
                            } : {
                              bgcolor: '#3f51b5!important',
                              color: 'white',
                              width: '10vw!important',
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
                  </div>
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
      </StyledDialog>
    );
  }
;

const StyledDialog = styled(Dialog)`
  direction: ${(props) => props.className === "en" ? "ltr" : "rtl"};
`;
