import { ListItemButton, ListItemText } from "@mui/material";
import { Movie } from "../../types";

type MovieListItemProps = {
  movie: Movie;
};

export default function MovieListItem(props: MovieListItemProps) {
  return (
    <ListItemButton>
      <ListItemText
        primary={props.movie.titleText.text}
        secondary={props.movie.releaseYear.year}
      />
    </ListItemButton>
  );
}
