import { Paper, Typography } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import LocalMoviesIcon from "@mui/icons-material/LocalMovies";

export type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <Container maxWidth="lg">
      <AppBar position="static">
        <Toolbar>
          <LocalMoviesIcon sx={{ mr: 2 }} />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Movies Database
          </Typography>
        </Toolbar>
      </AppBar>
      <Paper sx={{ borderRadius: 0 }}>{children}</Paper>
    </Container>
  );
}
