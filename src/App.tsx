import CssBaseline from "@mui/material/CssBaseline"
import { ThemeProvider, createTheme } from "@mui/material/styles"
import { Navigate, Route, Routes } from "react-router-dom"
import { buildListUrl } from "./common/utils.ts"
import Layout from "./components/Layout/Layout"
import MovieItem from "./components/MovieItem/MovieItem.tsx"
import MoviesList from "./components/MoviesList/MoviesList.tsx"

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
})

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Layout>
        <Routes>
          <Route path="/" element={<Navigate to={buildListUrl({ page: "1", pageSize: "10" })} />} />
          <Route
            path="/page/:page/pageSize/:pageSize/genre?/:genre?/type?/:type?/year?/:year?"
            element={<MoviesList />}
          />
          <Route path="/movie/:id" element={<MovieItem />} />
        </Routes>
      </Layout>
    </ThemeProvider>
  )
}

export default App
