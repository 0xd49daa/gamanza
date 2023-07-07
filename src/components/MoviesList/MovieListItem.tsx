import { ListItemButton, ListItemText } from "@mui/material"
import { Movie } from "../../common/types.ts"
import { useNavigate } from "react-router-dom"
import { useCallback } from "react"

type MovieListItemProps = {
  movie: Movie
}

export default function MovieListItem(props: MovieListItemProps) {
  const navigate = useNavigate()

  const handleClick = useCallback(() => {
    navigate(`/movie/${props.movie.id}`)
  }, [navigate, props.movie.id])

  return (
    <ListItemButton onClick={handleClick}>
      <ListItemText
        primary={props.movie.titleText.text}
        secondary={`${props.movie.titleType.id} / ${props.movie.releaseYear.year}`}
      />
    </ListItemButton>
  )
}
