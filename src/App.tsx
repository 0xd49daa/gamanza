import CssBaseline from "@mui/material/CssBaseline"
import { ThemeProvider, createTheme } from "@mui/material/styles"
import { RouterProvider } from "react-router-dom"
import Layout from "./components/Layout/Layout"
import router from "./common/router.tsx"

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
        <RouterProvider router={router} />
      </Layout>
    </ThemeProvider>
  )
}

export default App
