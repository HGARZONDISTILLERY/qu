import { Box } from "@mui/system";
import TemplateJoke from "../../templates/TemplateJoke";

import "./styles.css";
import { Typography } from "@mui/material";

const Home = () => {
  return (
    <>
      <Box component="header">
        <Typography variant="h1" className="joke-show-title">
          The joke show
        </Typography>
      </Box>
      <TemplateJoke />
    </>
  );
};

export default Home;
