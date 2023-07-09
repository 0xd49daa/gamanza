import { Box, Card } from "@mui/material"
import Typography from "@mui/material/Typography"
import { Seasons } from "../../common/types"

type SeasonsProps = {
  seasons?: Seasons
}

export default function MovieSeasons(props: SeasonsProps) {
  if (!props.seasons) {
    return null
  }

  return (
    <Box sx={{ display: "flex", flexWrap: "wrap", gap: "20px", padding: "20px" }}>
      {Object.keys(props.seasons).map((seasonNumber) => (
        <Card key={seasonNumber} sx={{ padding: "10px" }}>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Season {seasonNumber}
          </Typography>
          <Typography>{props.seasons?.[seasonNumber]} Episodes</Typography>
        </Card>
      ))}
    </Box>
  )
}
