import {useState} from 'react';
import {postAcademic, usePostAcademicMutation} from '@lib/system-design';

export const AcademicDialogLogic = () => {
  const [isOpen, setIsOpen] = useState(false);
  // const {mutateAsync} = usePostAcademicMutation();
  const onClose = () => setIsOpen(false);
  const onOpen = () => setIsOpen(true);
  const OnSubmit = async (data) => {
    const res = await postAcademic(data)
    setTimeout(() => {
      onClose();
    }, 2500);

    return res;
  }
  return {
    isOpen,
    onClose,
    onOpen,
    OnSubmit,
  };
};
