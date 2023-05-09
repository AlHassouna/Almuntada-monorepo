import {FC, useEffect, useState} from "react";
import {DescPodcast} from "../../sections/DescPodcast";

const Podcast: FC = () => {
  // const [details, setDetails] = useState()
  // useEffect(() => {
  //   fetch(geDetailsUrl)
  //     .then(res => res.json())
  //     .then(data => {
  //       setDetails({
  //         ...data,
  //         pathname: window.location.pathname,
  //         userAgent: window.navigator.userAgent
  //       })
  //     })
  //     .catch(err => console.log(err))
  // }, [])
  return (
    <DescPodcast/>
  )

};
export default Podcast;
