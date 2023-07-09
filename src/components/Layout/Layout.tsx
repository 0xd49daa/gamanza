import LocalMoviesIcon from "@mui/icons-material/LocalMovies"
import { Paper, Typography } from "@mui/material"
import AppBar from "@mui/material/AppBar"
import Container from "@mui/material/Container"
import Toolbar from "@mui/material/Toolbar"
import { Link } from "react-router-dom"

export type LayoutProps = {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
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
    </Container>
  )
}
