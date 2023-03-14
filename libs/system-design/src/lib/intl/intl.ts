import {useIntl} from 'react-intl';

function useIntlShared() {

  const intl = useIntl();
  const links = [
    {
      id: 1,
      name: intl.formatMessage({id: 'navbar.home'}),
      link: '/',
    },
    {
      id: 2,
      name: intl.formatMessage({id: 'navbar.academic'}),
      link: '/academic',
    },
    {
      id: 3,
      name: intl.formatMessage({id: 'navbar.podcast'}),
      link: '/podcast',
    },

    {
      id: 4,
      name: intl.formatMessage({id: 'navbar.contact'}),
      link: '/contact',
    },
  ];

  return links;
}

export {useIntlShared}


