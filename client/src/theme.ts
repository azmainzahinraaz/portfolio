import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: { mode: "dark" },
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          backgroundColor: "#242526", // background for outlined inputs
          borderRadius: 8,
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "#b1b1b1",
          },
          "&.Mui-focused": {
            backgroundColor: "#18191a",
          },
        },
        input: {
          color: "#fff", // input text color
        },
      },
    },
    MuiFilledInput: {
      styleOverrides: {
        root: {
          backgroundColor: "#242526", // background for filled inputs
          "&:hover": { backgroundColor: "#242526" },
          "&.Mui-focused": { backgroundColor: "#242526" },
        },
      },
    },
  },
});

export default theme;
