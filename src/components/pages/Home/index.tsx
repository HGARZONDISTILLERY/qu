import { Box } from "@mui/system";
import TemplateJoke from "../../templates/TemplateJoke";

import "./styles.css";

const Home = () => {
  return (
    <>
      <Box component="header">
        <h1>The joke show</h1>
      </Box>
      <TemplateJoke />
    </>
  );
};

export default Home;
