import React from 'react';
import {HorizontalLinearStepper, useLocale} from '@lib/system-design'
import {MainContainer} from "../../styled/joinus.styled";
import {NextPage} from "next";
import {AcademicDialog} from "../../components/Dialog/AcademicDialog";
import {AcademicDialogLogic} from "../../components/Dialog/dialogLogic";

const JoinUs: NextPage = () => {
  const {isOpen, onClose, onOpen, OnSubmit} = AcademicDialogLogic();
  const locale = useLocale();
  return (
    <MainContainer dir={locale}>
      {/*<HorizontalLinearStepper/>*/}
      <AcademicDialog isOpen={isOpen} OnSubmit={OnSubmit} handleClose={onClose}/>
    </MainContainer>
  );
}

export default JoinUs;
