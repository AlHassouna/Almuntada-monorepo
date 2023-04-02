import {FC} from "react";

import {DescPodcast} from '../../sections/DescPodcast'
import PodcastCard from "../../components/Podcast/PodcastCard";
import {useGetPodcast} from "../../API/podcast/getPodcasts";

const Podcast: FC = () => {
  const {data} = useGetPodcast();
  return (
    <>
      <DescPodcast/>
      <PodcastCard title={data[0].title}
                   podcastUrl={data[0].podcastUrl}/>
    </>
  )
}

export default Podcast;
