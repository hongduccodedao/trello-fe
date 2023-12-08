import { experimental_extendTheme as extendTheme } from "@mui/material/styles";

// Create a theme instance.
const theme = extendTheme({
  colorSchemes: {
    light: {
      palette: {
        // primary: {
        //   main: "#ff0000",
        // },
        // secondary: {
        //   main: "#0000ff",
        // },
      }
    },
    dark: {
      palette: {
        // primary: {
        //   main: "#00ff00",
        // },
        // secondary: {
        //   main: "#ffff00",
        // },
      }
    }
  },
});

export default theme;
