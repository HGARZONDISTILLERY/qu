import { Box } from "@mui/system";
import CarouselJoke from "../../templates/CarouselJoke";
import "./styles.css";

const Home = () => {
  return (
    <>
      <Box component="header">
        <h1>The JOKE show</h1>
        <p>Enjoy a good joke at any time</p>
      </Box>
      <CarouselJoke />
    </>
  );
};

export default Home;
