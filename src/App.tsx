import Layout from "./components/Layout/Layout";
import MoviesList from "./components/MoviesList/MoviesList";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { useEffect } from "react";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  useEffect(() => {
    console.log("app");
  }, []);

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Layout>
        <MoviesList />
      </Layout>
    </ThemeProvider>
  );
}

export default App;
