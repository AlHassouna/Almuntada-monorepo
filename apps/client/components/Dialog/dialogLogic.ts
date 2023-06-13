import {useState} from 'react';
import {postAcademic} from '@lib/system-design';
import {useRouter} from "next/router";
import {useLocale} from '@lib/system-design'

export const AcademicDialogLogic = () => {
  const locale = useLocale();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const onOpen = () => setIsOpen(true)
  const onClose = () => setIsOpen(false)

  const OnSubmit = async (data) => {
    const res = await postAcademic(data)
    setTimeout(() => {
      onClose();
      if (locale === 'en' || locale === 'he') router.push(`/${locale}/`)
      else router.push(`/`)
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
