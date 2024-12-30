import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
      
    },
    secondary: {
      main: "#dc004e",
    },
  },
  components: {
    MuiIcon:{

    }
  },
  typography: {
    fontFamily: ["Blinker", "sans-serif"].join(","),
    h5:{
      fontSize:"2rem",
    },
    h6:{
      fontSize:"1.5rem",
    },
    h1:{
      fontSize:"2.5rem",
      fontWeight:700,
    }
  },
});

export default theme;
