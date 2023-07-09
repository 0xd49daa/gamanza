import LocalMoviesIcon from "@mui/icons-material/LocalMovies"
import { Paper, Typography } from "@mui/material"
import AppBar from "@mui/material/AppBar"
import Container from "@mui/material/Container"
import Toolbar from "@mui/material/Toolbar"
import { Link } from "react-router-dom"
import Alert from "@mui/material/Alert"
import { useSelector } from "react-redux"
import { getError } from "../../common/selectors"

export type LayoutProps = {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  const error = useSelector(getError)

  return (
    <Container maxWidth="lg">
      <AppBar position="static">
        <Toolbar sx={{ display: "flex" }}>
          <LocalMoviesIcon sx={{ mr: 2 }} />
          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Movies Database
            </Typography>
          </Link>
        </Toolbar>
      </AppBar>
      <Paper sx={{ borderRadius: 0 }}>{children}</Paper>
      {error ? (
        <Alert variant="filled" severity="error">
          There is an error while fetching data from the server. Please try to refresh the page.
        </Alert>
      ) : null}
    </Container>
  )
}
