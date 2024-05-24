import { createTheme } from "@mui/material";

const theme = createTheme();

theme.typography.h1 = {
  fontSize: "1.2rem",
  fontFamily: "Roboto",
  "@media (max-width:400px)": {
    fontSize: "2.2rem",
  },
};

theme.typography.h2 = {
  fontSize: "1.2rem",
  fontFamily: "Roboto",
  "@media (max-width:400px)": {
    fontSize: "2rem",
  },
};

export default theme;
