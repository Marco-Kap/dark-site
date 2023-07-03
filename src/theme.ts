import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: "#fa1a2c",
    },
    secondary: {
      main: "#af121e",
    },
    nav: {
      main: "#fdf268",
    },
    error: {
      main: red.A400,
    },
  },

  spacing: [0, 2, 3, 5, 8, 10, 30],
  typography: {
    fontFamily: "arial",
  },
});
theme.spacing(2); // = 0.25 * 2rem = 0.5rem = 8px

export default theme;
