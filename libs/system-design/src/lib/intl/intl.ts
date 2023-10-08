import {useIntl} from 'react-intl';

function useIntlShared() {

  const intl = useIntl();
  const links = [
    {
      id: 1,
      name: intl.formatMessage({id: 'navbar.academic'}),
      link: '/academic',
    },
    {
      id: 2,
      name: intl.formatMessage({id: 'navbar.podcast'}),
      link: '/podcast',
    },
    {
      id: 3,
      name: intl.formatMessage({id: 'navbar.events'}),
      link: '/events',
    },
    {
      id: 4,
      name: intl.formatMessage({id: 'navbar.contact'}),
      link: '/contact',
    },

    {
      id: 5,
      name: intl.formatMessage({id: 'homepage.joinus'}),
      link: '/joinus'
    },

  ];

  return links;
}

export {useIntlShared}


