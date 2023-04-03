import { FC } from "react";

import { DescPodcast } from "../../sections/DescPodcast";
import PodcastCard from "../../components/Podcast/PodcastCard";
import { useGetPodcast } from "../../API/podcast/getPodcasts";
import { Skeleton } from "@mui/material";

const Podcast: FC = () => {
  const { data, isLoading, isError } = useGetPodcast();
  console.log(data);
  return (
    isLoading ? (<Skeleton />) : (
      <>
        <DescPodcast />
        <PodcastCard title={data[0]?.title}
                     podcastUrl={data[0]?.podcastUrl} />
      </>
    )

  );
};

export default Podcast;
