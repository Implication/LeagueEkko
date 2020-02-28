import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const Video = () => {
  function importAll(r) {
    return r.keys().map(r);
  }

  const vids = importAll(require.context("../videos", false, /\.webm$/));
  console.log(vids);
  return (
    <Carousel
      showArrows={true}
      showThumbs={false}
      showStatus={false}
      dynamicHeight={true}
      showIndicators={false}>
      {vids.map(vid => (
        <div key={vids.indexOf(vid)}>
          <video src={vid} controls width="100%" allowfullscreen></video>
        </div>
      ))}
    </Carousel>
  );
};

export default Video;
