import React, {FC, useEffect, useState} from "react";
import {AcademicsCard} from "../../components/Card/AcademicsCard";
import {AcademicSection, CardContainer} from "../../styled/academics.styled";
import {AcademicDialog} from "../../components/Dialog/AcademicDialog";
import {AcademicDialogLogic} from "../../components/Dialog/dialogLogic";
import {MainContainer} from "../../styled/home.styled";
import {useLocale} from "@lib/system-design";
import {Button} from "@mui/material";
import {useIntl} from "react-intl";
import styled from "styled-components";
import {motion} from "framer-motion";
import {fadeIn} from "../../utils/motion";
import {useGetAcademicsBySearchTerms} from "@lib/system-design";
import {AutoComplete} from "@lib/system-design";
import {DataToSelectOptions} from "@lib/shared-hooks";
import {getCityList} from "@lib/shared-types";
import {ListOptions} from "../../components/Dialog/optionAcademic";
import {CardsSection} from "../../styled/global.styled";
import Head from "next/head";
import Slideshow from "../../components/Slideshow/Slideshow";
import Skeleton from '@mui/material/Skeleton';

const Academic: FC = () => {

  const intl = useIntl();
  const {data, isLoading} = useGetAcademicsBySearchTerms(
    {isApproved: true}
  );
  const title = intl.formatMessage({id: 'page.home.head.title'});

  const locale = useLocale();
  const [selectedFilter, setSelectedFilter] = useState({
    city: "",
    subject: ""
  });

  const onChangeAutoComplete = (key, event) => {
    setSelectedFilter({
      ...selectedFilter,
      [key]: event
    });
  };
  const {isOpen, onClose, onOpen, OnSubmit} = AcademicDialogLogic();
  const citiesOption = DataToSelectOptions(getCityList, "label", "label");
  const {subjectsOptions} = ListOptions();
  const geDetailsUrl = process.env.NEXT_PUBLIC_API_DETAILS_URL
  const slides = intl.messages[
    "academicpage.slides"
    ] as unknown as any
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
  // const [details, setDetails] = useState()
  // useEffect(() => {
  //   fetch(geDetailsUrl)
  //     .then(res => res.json())
  //     .then(data => {
  //       setDetails({
  //         ...data,
  //         pathname: window.location.pathname,
  //         userAgent: window.navigator.userAgent
  //       })
  //     })
  //     .catch(err => console.log(err))
  // }, [])
  return (
    <MainContainer dir={locale}>
      <Head>
        <title>{title}</title>
      </Head>
      <AcademicSection>
        <Slideshow slides={slides} delay={5000} autoplay={true} onClick={onOpen}/>
        {
          isOpen && (
            <AcademicDialog
              isOpen={isOpen}
              OnSubmit={OnSubmit}
              handleClose={onClose}
            />
          )
        }
      </AcademicSection>
      <CardsSection>
        <motion.p
          variants={fadeIn("up", "tween", 0.2, 1)}
          className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-[orange] mb-4"
        >
          {intl.formatMessage({id: "academicpage.acdemics"})}
        </motion.p>
        <div className="flex flex-col sm:flex-row mx-auto w-full sm:justify-around items-center h-full">
          <AutoComplete
            w="300px"
            name="city"
            setFieldValue={(v, e) => onChangeAutoComplete("city", e)}
            data={citiesOption}
            value={selectedFilter.city}
            freeSolo={false}
            label={String(intl.messages["academicpage.dialog.city"])}
          />
          <AutoComplete
            w="300px"
            name="subject"
            setFieldValue={(v, e) => onChangeAutoComplete("subject", e)}
            data={subjectsOptions || Array({value: "", label: ""})}
            value={selectedFilter.subject}
            freeSolo={false}
            label={String(intl.messages["academicpage.dialog.subject"])}
          />
        </div>
        <CardContainer>
          {isLoading ?
            <Skeleton variant="rectangular" width={210} height={118}/>
            :
            filteredData?.map((item, id) => (
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
      </CardsSection>
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
    background-color: #8792da;
    color: black;
  }
`;

export {StyledButton};
