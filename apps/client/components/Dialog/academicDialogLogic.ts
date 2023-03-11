import { useState } from 'react';
import { usePostAcademic } from '../../API/academic/postAcademic';
import { AcademicCreated } from '../../API/academic/types';

export const AcademicDialogLogic = () => {
  const [isOpen, setIsOpen] = useState(false);
  // const [];
  const onClose = () => setIsOpen(false);
  const onOpen = () => setIsOpen(true);
  const OnSubmit = (data: AcademicCreated) => {
    console.log(data);
    usePostAcademic(data);
  };

  return {
    isOpen,
    onClose,
    onOpen,
    OnSubmit,
  };
};
