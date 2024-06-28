import React, { useState } from "react";
import "./styles.css";

import ReactSimplyCarousel from "react-simply-carousel";
import CardJoke from "../../molecules/CardJoke";
import { Joke } from "../../../utils/types";
import { GridLoader } from "react-spinners";

interface SimplyCarouselJokeProps {
  isLoading: boolean;
  randomJokeData: Joke[] | undefined;
}

const SimplyCarouselJoke: React.FC<SimplyCarouselJokeProps> = ({
  isLoading,
  randomJokeData,
}) => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  return (
    <>
      {isLoading ? (
        <GridLoader />
      ) : (
        <ReactSimplyCarousel
          disableNavIfEdgeVisible
          activeSlideIndex={activeSlideIndex}
          onRequestChange={setActiveSlideIndex}
          itemsToShow={1}
          itemsToScroll={1}
          forwardBtnProps={{
            className: "forwardBtnProps",
            children: <span>{`>`}</span>,
          }}
          backwardBtnProps={{
            className: "backwardBtnProps",
            children: <span>{`<`}</span>,
          }}
          responsiveProps={[
            {
              itemsToShow: 1,
              itemsToScroll: 1,
              minWidth: 768,
            },
          ]}
          speed={400}
          easing="linear"
          delay={2}
          dotsNav={{
            show: true,
            itemBtnProps: {
              style: {
                height: 16,
                width: 16,
                borderRadius: "50%",
                border: 0,
                marginTop: "20px",
              },
            },
            activeItemBtnProps: {
              style: {
                height: 16,
                width: 16,
                borderRadius: "50%",
                border: 0,
                background: "black",
                marginTop: "20px",
              },
            },
          }}
        >
          {randomJokeData?.map((joke) => (
            <CardJoke joke={joke} key={joke.id} />
          ))}
        </ReactSimplyCarousel>
      )}
    </>
  );
};

export default SimplyCarouselJoke;
