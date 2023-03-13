import { useRouter } from 'next/router';
 function useLocale  (){
  const {locale} = useRouter();
  return locale;
}

export {useLocale}
