import { useState } from 'react';
import { usePostAcademicMutation } from '../../API/academic/postAcademic';
import { AcademicCreated, AcademicField } from '../../API/academic/types';

export const AcademicDialogLogic = () => {
  const [academicDetail, setAcademicDetail] = useState<AcademicCreated>();
  const [isOpen, setIsOpen] = useState(false);
  const { mutate } = usePostAcademicMutation();
  const onClose = () => setIsOpen(false);
  const onOpen = () => setIsOpen(true);
  const OnSubmit = async () => {
    await mutate(academicDetail);
    onClose();
  };
  const onChange = (filed: AcademicField, data: string) => {
    setAcademicDetail({ ...academicDetail, [filed]: data });
  };

  return {
    isOpen,
    onClose,
    onOpen,
    OnSubmit,
    onChange,
  };
};
