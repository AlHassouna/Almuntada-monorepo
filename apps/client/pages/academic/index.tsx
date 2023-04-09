import React, {FC, useState} from "react";
import {AcademicsCard} from "../../components/Card/AcademicsCard";
import {AcademicSection, CardContainer, ImageContainer} from "../../styled/academics.styled";
import {AcademicDialog} from "../../components/Dialog/AcademicDialog";
import {AcademicDialogLogic} from "../../components/Dialog/dialogLogic";
import {MainContainer} from "../../styled/home.styled";
import {useLocale} from "@lib/system-design";
import {Button, Typography} from "@mui/material";
import {useIntl} from "react-intl";
import styled from "styled-components";
import {motion} from "framer-motion";
import {fadeIn} from "../../utils/motion";
import {useGetAcademicsBySearchTerms} from "@lib/system-design";
import {AutoComplete} from "@lib/system-design";
import {DataToSelectOptions} from "@lib/shared-hooks";
import {getCityList} from "@lib/shared-types";
import {ListOptions} from "../../components/Dialog/optionAcademic";
import {MainSection} from "../../styled/global.styled";
import Head from "next/head";

const Academic: FC = () => {

  const intl = useIntl();
  const {data} = useGetAcademicsBySearchTerms(
    {isApproved: true}
  );
  const title = intl.formatMessage({id: 'page.home.head.title'});

  const locale = useLocale();
  const [selectedFilter, setSelectedFilter] = useState({
    city: "",
    subject: ""
  });

  const onChangeAutoComplete = (value, event, key?) => {
    setSelectedFilter({
      ...selectedFilter,
      [key]: event?.value || event?.label
    });
  };
  const {isOpen, onClose, onOpen, OnSubmit} = AcademicDialogLogic();
  const citiesOption = DataToSelectOptions(getCityList, "label", "label");
  const {subjectsOptions} = ListOptions();

  const filteredData = data?.filter((item) => {
      if (!selectedFilter.city && !selectedFilter.subject) {
        return true;
      }
      if (selectedFilter.city && selectedFilter.subject) {
        return selectedFilter.city == item.city && selectedFilter.subject === item.subject?.subject;
      }
      return item.city === selectedFilter.city || item.subject?.subject === selectedFilter.subject;
    }
  );
  return (
    <MainContainer dir={locale}>
      <Head>
        <title>{title}</title>
      </Head>
      <AcademicSection>
        <ImageContainer property="/academic.jpeg">
          <Typography className="text-center" variant="h3" color="white">
            {intl.formatMessage({id: "academicpage.title"})}
          </Typography>
          <Typography className="text-center" variant="h3" color="white">
            {intl.formatMessage({id: "academicpage.sub.title"})}
          </Typography>
          <Typography className="text-center" variant="h3" color="white">
            {intl.formatMessage({id: "academicpage.text"})}
          </Typography>
          <StyledButton variant="outlined" onClick={onOpen}>
            {intl.formatMessage({id: "academicpage.button"})}
          </StyledButton>
          {isOpen && (
            <AcademicDialog
              isOpen={isOpen}
              OnSubmit={OnSubmit}
              handleClose={onClose}
            />
          )}
        </ImageContainer>
      </AcademicSection>
      <MainSection>
        <div>
          <motion.p
            variants={fadeIn("up", "tween", 0.2, 1)}
            className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-[orange] mb-4"
          >
            {intl.formatMessage({id: "academicpage.acdemics"})}
          </motion.p>
          <div className="flex flex-col sm:flex-row mx-auto w-full sm:justify-around items-center h-full">
            <AutoComplete
              w="300px"
              onChange={(v, e) => onChangeAutoComplete(v, e, "city")}
              data={citiesOption}
              value={selectedFilter.city}
              freeSolo={false}
              label={String(intl.messages["academicpage.dialog.city"])}
            />
            <AutoComplete
              w="300px"
              onChange={(v, e) => onChangeAutoComplete(v, e, "subject")}
              data={subjectsOptions || Array({value: "", label: ""})}
              value={selectedFilter.subject}
              freeSolo={false}
              label={String(intl.messages["academicpage.dialog.subject"])}
            />
          </div>
        </div>
        <CardContainer>
          {filteredData?.map((item, id) => (
            <AcademicsCard
              key={id}
              firstName={item.firstName}
              lastName={item.lastName}
              email={item.email}
              imageUrl={item.imageUrl}
              degree={item.degree}
              subject={item.subject}
              career={item.career}
              city={item.city}
            />
          ))}

        </CardContainer>
      </MainSection>
    </MainContainer>

  );
};
export default Academic;

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

export {StyledButton};
