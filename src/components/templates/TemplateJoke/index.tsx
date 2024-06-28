import { useState, FC } from "react";
import { useQuery } from "react-query";
import "./styles.css";

import {
  fetchJokesByType,
  fetchRandomDadJoke,
  fetchRandomJokes,
} from "../../../api";
import { DadJoke, Joke } from "../../../utils/types";
import { Box } from "@mui/material";
import ModalJoke from "../../molecules/ModalJoke";
import NavigationJoke from "../../organisms/NavigationJoke";
import SimplyCarouselJoke from "../../organisms/SimplyCarouselJoke";
import { GridLoader } from "react-spinners";

const TemplateJoke: FC = () => {
  const [showDadJoke, setShowDadJoke] = useState(false);
  const [open, setOpen] = useState(false);
  const [jokeTypeValue, setJokeTypeValue] = useState<string>("");

  const handleClickOpen = () => {
    setOpen(true);
    setShowDadJoke(true);
  };

  const handleClose = () => {
    setOpen(false);
    setShowDadJoke(false);
  };

  const {
    data: randomJokeData,
    error: randomJokeError,
    isLoading: randomJokeIsLoading,
    refetch: randomJokeRefetch,
  } = useQuery<Joke[]>("randomJokes", fetchRandomJokes, {
    staleTime: Infinity,
    cacheTime: Infinity,
    refetchOnWindowFocus: false,
  });

  const {
    data: dadJokeData,
    error: dadJokeError,
    isLoading: dadJokeIsLoading,
    refetch: dadJokeRefetch,
  } = useQuery<DadJoke>("randomDadJoke", fetchRandomDadJoke);

  const {
    data: randomJokeByTypeData,
    error: randomJokeByTypeError,
    isLoading: randomJokeByTypeIsLoading,
  } = useQuery<Joke[]>(
    ["randomTypejokes", jokeTypeValue],
    () => fetchJokesByType(jokeTypeValue),
    {
      staleTime: Infinity,
      cacheTime: Infinity,
      enabled: jokeTypeValue !== "",
    },
  );

  if (randomJokeIsLoading)
    return (
      <Box sx={{ marginTop: "150px" }}>
        <GridLoader margin={20} color="#BC1001" />
      </Box>
    );

  const renderError = (error: unknown) => {
    if (error instanceof Error)
      return <div>Error fetching jokes: {error.message}</div>;
  };

  return (
    <>
      {renderError(randomJokeError)}
      <NavigationJoke
        setJokeCategoryValue={setJokeTypeValue}
        refetch={randomJokeRefetch}
        handleClickOpen={handleClickOpen}
      />
      <Box component="section" className="joke-category-section">
        {jokeTypeValue !== "" ? (
          <>
            {renderError(randomJokeByTypeError)}
            <SimplyCarouselJoke
              isLoading={randomJokeByTypeIsLoading}
              randomJokeData={randomJokeByTypeData}
            />
          </>
        ) : (
          <SimplyCarouselJoke
            isLoading={randomJokeIsLoading}
            randomJokeData={randomJokeData}
          />
        )}

        <ModalJoke
          showDadJoke={showDadJoke}
          dadJokeIsLoading={dadJokeIsLoading}
          renderError={renderError}
          dadJokeError={dadJokeError}
          open={open}
          handleClose={handleClose}
          dadJokeData={dadJokeData}
          dadJokeRefetch={dadJokeRefetch}
        />
      </Box>
    </>
  );
};

export default TemplateJoke;
