import {useState} from 'react';
import {usePostAcademicMutation} from '@lib/system-design';

export const AcademicDialogLogic = () => {
  const [isOpen, setIsOpen] = useState(false);
  const {mutate} = usePostAcademicMutation();
  const onClose = () => setIsOpen(false);
  const onOpen = () => setIsOpen(true);
  const OnSubmit = async (data) => {
    await mutate(data);
    onClose();
  };


  return {
    isOpen,
    onClose,
    onOpen,
    OnSubmit,
  };
};
