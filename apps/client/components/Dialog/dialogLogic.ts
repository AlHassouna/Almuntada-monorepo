import {useState} from 'react';
import {postAcademic, usePostConfirmationEmailMutation} from '@lib/system-design';

export const AcademicDialogLogic = () => {
  const {mutate} = usePostConfirmationEmailMutation();
  const [isOpen, setIsOpen] = useState(false);
  const onOpen = () => setIsOpen(true)
  const onClose = () => setIsOpen(false)

  const OnSubmit = async (data) => {
    const res = await postAcademic(data)
    const sendConfirmEmail = await mutate(data);

    if (res?.data?.status === 201) {
      setTimeout(() => {
        onClose();
      }, 2500);
    }
    return {
      sendConfirmEmail,
      res
    };


  }
  return {
    isOpen,
    onClose,
    onOpen,
    OnSubmit,
  };
};
