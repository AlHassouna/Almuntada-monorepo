import {useState} from 'react';
import {postAcademic} from '@lib/system-design';

export const AcademicDialogLogic = () => {
  const [isOpen, setIsOpen] = useState(false);
  const onOpen = () => setIsOpen(true)
  const onClose = () => setIsOpen(false)

  const OnSubmit = async (data) => {
    const res = await postAcademic(data)
    if (res?.data?.status === 201) {
      setTimeout(() => {
        onClose();
      }, 2500);
    }
    return res;


  }
  return {
    isOpen,
    onClose,
    onOpen,
    OnSubmit,
  };
};
