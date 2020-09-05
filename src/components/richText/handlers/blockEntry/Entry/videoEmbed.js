import React from "react";
import { locale } from "../../"
import getVideoId from "get-video-id";

export default ({ fields }) => {
  const { title, url } = fields;
  const video = getVideoId(url[locale]);
  const JSX = VideoSource[video.service];
  return JSX ? (
    <div className="embedded-video">
      <JSX id={video.id} title={`${title[locale]} ${video.service} video`} />
    </div>
  ) : (
    <em className="error">Video source {video.service} is not supported.</em>
  );
};

const EmbedYouTube = ({ id, title }) => {
  return (
    <iframe
      title={title}
      width="560"
      height="315"
      src={`https://www.youtube.com/embed/${id}`}
      frameBorder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  );
};

const VideoSource = {
  youtube: EmbedYouTube,
};
