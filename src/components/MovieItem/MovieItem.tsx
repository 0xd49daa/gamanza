import ArrowBack from "@mui/icons-material/ArrowBack"
import Box from "@mui/material/Box"
import IconButton from "@mui/material/IconButton"
import Typography from "@mui/material/Typography"
import { useNavigate, useParams } from "react-router-dom"
import useMovie from "./hooks/useMovie"
import { styled } from "@mui/material/styles"

const ImageContainer = styled("div")({
  width: "300px",
  height: "400px",
})

const StyledImage = styled("img")({
  display: "block",
  maxHeight: "100%",
  maxWidth: "100%",
})

export default function MovieItem() {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const { movie, loading } = useMovie(id)

  console.log(movie)

  return (
    <>
      <Box sx={{ padding: "8px" }}>
        <IconButton onClick={() => navigate(-1)}>
          <ArrowBack />
        </IconButton>
      </Box>
      {loading ? null : (
        <Box sx={{ display: "flex", flexDirection: "column", flexWrap: "wrap", alignItems: "center" }}>
          <ImageContainer>
            <StyledImage src={movie?.primaryImage?.url} alt={movie?.primaryImage?.caption?.plainText} />
          </ImageContainer>
          <Typography variant="h4" component="h1">
            {movie?.titleText.text} / {movie?.releaseYear?.year}
          </Typography>
        </Box>
      )}
    </>
  )
}
