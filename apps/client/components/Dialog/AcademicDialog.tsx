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
import {StyledButton} from "../../pages/academic";
import styled from "styled-components";
import {AutoComplete, GenericSelect} from "@lib/system-design";
import {ListOptions} from "./optionAcademic";
import {DataToSelectOptions} from "@lib/shared-hooks";
import {getDegreeList} from "@lib/shared-types";
import {SelectChangeEvent} from "@mui/material/Select";
import {getCityList} from "@lib/shared-types";
import {FileUpload} from '@lib/system-design'
import {Date} from '@lib/system-design'
import {Dayjs} from 'dayjs'

interface Props {
  handleClose: () => void;
  OnSubmit: (data) => void;
  isOpen: boolean;
}


export const AcademicDialog: FC<Props> = ({handleClose, OnSubmit, isOpen}) => {
    const initialValues = {
      firstName: "",
      lastName: "",
      age: "",
      phone: "",
      imageUrl: "",
      email: "",
      city: "",
      degree: "",
      subject: "",
      career: ""
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
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    const [checked, setChecked] = useState(false);
    const [date, setDate] = useState<Dayjs | null>(null);
    const handleChange = (event) => {
      setChecked(event.target.checked);
    };

    const [academicDetail, setAcademicDetail] = useState({
      city: "",
      degree: "",
      subject: "",
      career: "",
      gender: "",
      company: "",
      age: undefined,
    });
    const [imageUrl, setImageUrl] = useState("");
    const validationSchema = Yup.object().shape({
      firstName: Yup.string().matches(nameRegexWithSpaces, "Only English letters").required(String(required)),
      lastName: Yup.string().matches(nameRegexWithSpaces, "Only English letters").required(String(required)),
      email: Yup.string().email("Invalid email address").matches(emailRegex, "Only English letters").required(String(required))
    });

    const onChangeAutoComplete = (value, event, key?) => {
      setAcademicDetail({
        ...academicDetail,
        [key]: event?.value || event?.label
      });
    };

    const onChangeSelect = (event: SelectChangeEvent, key) => {
      setAcademicDetail({
        ...academicDetail,
        [key]: event.target?.value || event
      });
    };
    const locale = useLocale();
    return (
      <StyledDialog maxWidth="sm" fullWidth open={isOpen} onClose={handleClose} className={locale}>
        <DialogTitle>{intl.messages["academicpage.dialog.title"]}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {intl.messages["academicpage.dialog.sub.title"]}
          </DialogContentText>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values) => OnSubmit({
              ...values,
              city: academicDetail.city,
              age: date.format('YYYY-MM-DD'),
              subject: academicDetail?.subject,
              degree: academicDetail.degree,
              gender: academicDetail.gender,
              isAgree: checked,
              imageUrl: imageUrl,
              company: academicDetail?.company,
              career: academicDetail?.career
            })}
          >
            {({handleSubmit}) => {
              return (
                <StyledForm onSubmit={handleSubmit}>
                  <Field name="firstName" type="text" as={TextField}
                         label={intl.messages["academicpage.dialog.first.name"]}/>
                  <ErrorMessage name="firstName"/>
                  <Field name="lastName" type="text" as={TextField}
                         label={intl.messages["academicpage.dialog.last.name"]}/>
                  <ErrorMessage name="lastName"/>
                  <Field name="age" type="number" as={Date} value={date}
                         setValue={setDate}
                         label={intl.messages["academicpage.dialog.age"]}/>
                  <ErrorMessage name="age"/>
                  <Field name="email" type="email" as={TextField} label={intl.messages["academicpage.dialog.email"]}/>
                  <ErrorMessage name="email"/>
                  <Field name="city" type="text" as={AutoComplete}
                         onChange={(v, e) => onChangeAutoComplete(v, e, "city")}
                         data={citiesOption}
                         freeSolo={false}
                         value={academicDetail.city}
                         label={intl.messages["academicpage.dialog.city"]}></Field>
                  <ErrorMessage name="city"/>
                  <Field name="degree" type="text" as={GenericSelect} label={intl.messages["academicpage.dialog.degree"]}
                         data={degreeOption}
                         value={academicDetail.degree} onChange={(v) => onChangeSelect(v, "degree")}/>
                  <ErrorMessage name="degree"/>
                  <Field name="subject" type="text" as={AutoComplete} value={academicDetail.subject}
                         onChange={(v, e) => onChangeAutoComplete(v, e, "subject")}
                         data={subjectsOptions}
                         freeSolo={true}
                         label={intl.messages["academicpage.dialog.subject"]}/>
                  <ErrorMessage name="subject"/>
                  <Field name="company" type="text" as={AutoComplete} value={academicDetail.company}
                         onChange={(v, e) => onChangeAutoComplete(v, e, "company")}
                         data={companiesOptions}
                         freeSolo={true}
                         label={intl.messages["academicpage.dialog.company"]}/>
                  <ErrorMessage name="company"/>
                  <Field name="career" type="text" as={AutoComplete} value={academicDetail.career}
                         onChange={(v, e) => onChangeAutoComplete(v, e, "career")}
                         freeSolo={true}
                         data={careersOptions} label={intl.messages["academicpage.dialog.job"]}/>
                  <ErrorMessage name="career"/>
                  <Field name="gender" className="gender" type="text" as={GenericSelect}
                         data={genderOption}
                         label={intl.messages["academicpage.dialog.sex"]} value={academicDetail.gender}
                         onChange={(v, e) => onChangeSelect(v, "gender")}/>
                  <ErrorMessage name="gender"/>
                  <Field name="phone" type="text" as={TextField}
                         label={intl.messages["academicpage.dialog.phone"]}/>
                  <ErrorMessage name="phone"/>
                  <Field name="imageUrl" type="text" as={FileUpload}
                         setUrl={setImageUrl}
                         label={intl.messages["academicpage.dialog.imageurl"]}/>
                  <ErrorMessage name="imageUrl"/>
                  <Field type="checkbox" name="isAgree" as={FormGroup}>
                    <FormControlLabel
                      control={<Checkbox checked={checked} onChange={handleChange} name="isAgree"/>}
                      label={intl.messages["academicpage.dialog.checkbox"]}
                    />
                  </Field>
                  <div className="flex justify-center items-center">
                    <StyledButton type="submit" disabled={!checked}>
                      {
                        intl.messages["academicpage.dialog.button"]
                      }
                    </StyledButton>
                  </div>
                </StyledForm>
              );
            }}
          </Formik>
        </DialogContent>
      </StyledDialog>
    );
  }
;

const StyledDialog = styled(Dialog)`
  direction: ${(props) => props.className === "ar" ? "rtl" : "ltr"};
`;
