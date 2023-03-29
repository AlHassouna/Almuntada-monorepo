import {useIntl} from 'react-intl';


function SlideData() {
  const intl = useIntl();
  const data = [
    {
      title: intl.formatMessage({id: 'navbar.home'}),
      description: intl.formatMessage({id: 'navbar.home'}),
      image: "https://media.licdn.com/dms/image/C4D03AQF1zOe2Pjku0w/profile-displayphoto-shrink_800_800/0/1662553255489?e=1683763200&v=beta&t=ImifO4UEu38bxSOaGmgk2kUktQMWSd2a0eK6LReyvbU"
      ,
      button: {
        text: intl.formatMessage({id: 'navbar.home'}),
        link: '',
      }
    },
    {
      title: intl.formatMessage({id: 'navbar.podcast'}),
      description: intl.formatMessage({id: 'navbar.home'}),
      "image": "https://media.licdn.com/dms/image/C4D03AQF29U_yrJJibA/profile-displayphoto-shrink_800_800/0/1655839867728?e=1683763200&v=beta&t=OlYZf3jA792K5vFacgTgQUGd6xJPEONxp1OOZOBaq1A"
      , button: {
        text: intl.formatMessage({id: 'navbar.home'}),
        link: '/',
      }
    },
  ]
  return data
}

export {SlideData}

