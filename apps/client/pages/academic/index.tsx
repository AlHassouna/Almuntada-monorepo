import {FC, useState} from 'react';
import {AcademicsCard} from '../../components/Card/AcademicsCard';
import {CardContainer, ImageContainer} from '../../styled/academics.styled';
import {AcademicDialog} from '../../components/Dialog/AcademicDialog';
import {AcademicDialogLogic} from '../../components/Dialog/dialogLogic';
import {MainSection, MainContainer} from "../../styled/home.styled";
import {useLocale} from "@myworkspace/system-design";
import {Button, Typography} from '@mui/material';
import {useIntl} from "react-intl";
import styled from 'styled-components'
import {GroupedCities} from "../../components/CitySearch/Search";
import {motion} from 'framer-motion';
import {fadeIn} from "../../utils/motion";
import {GroupedSubject} from "../../components/Subject/Search";
import {useGetAcademicsBySearchTerms} from "../../API/academic/searchAcademic";

const Academic: FC = () => {

  const intl = useIntl();
  const {data} = useGetAcademicsBySearchTerms(
    {isApproved: false}
  );
  const locale = useLocale()
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedSubject, setSelectedSubject] = useState('');
  const {isOpen, onClose, onOpen, OnSubmit} = AcademicDialogLogic();
  const filteredData = data?.filter((item) => {
      if (!selectedCity && !selectedSubject) {
        return true;
      }
      if (selectedCity && !selectedSubject) {
        return item.city === selectedCity;
      }
      if (!selectedCity && selectedSubject) {
        return item.subject?.subject === selectedSubject;
      }
      return item.city === selectedCity && item.subject?.subject === selectedSubject;
    }
  )

  return (
    <MainContainer dir={locale}>
      <ImageContainer>
        <Typography className='text-center' variant="h3" color="white">
          {intl.formatMessage({id: 'academicpage.title'})}
        </Typography>
        <Typography className='text-center' variant="h4" color="white">
          {intl.formatMessage({id: 'academicpage.sub.title'})}
        </Typography>

        <StyledButton variant="outlined" onClick={onOpen}>
          {intl.formatMessage({id: 'academicpage.button'})}
        </StyledButton>
        {isOpen && (
          <AcademicDialog
            isOpen={isOpen}
            OnSubmit={OnSubmit}
            handleClose={onClose}
          />
        )}
      </ImageContainer>
      <MainSection>
        <motion.p
          variants={fadeIn('up', 'tween', 0.2, 1)}
          className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-[orange] mb-4"
        >
          {intl.messages['academicpage.text']}
        </motion.p>
        <div className='flex flex-col sm:flex-row mx-auto w-full sm:justify-around items-center h-full'>
          <GroupedCities size={"300px"} label={String(intl.messages['academicpage.dialog.city'])}
                         onSelected={setSelectedCity}/>
          <GroupedSubject size={"300px"} label={String(intl.messages['academicpage.dialog.subject'])}
                          onSelected={setSelectedSubject}/>

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

export {StyledButton}
