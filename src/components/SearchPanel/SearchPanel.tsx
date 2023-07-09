import Download from "@mui/icons-material/Download"
import { Button, Grid, IconButton } from "@mui/material"
import { useCallback } from "react"
import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import usePageNavigation from "../../common/hooks/usePageNavigation.ts"
import { getMovies } from "../../common/selectors.ts"
import { downLoadFile } from "../../common/utils.ts"
import CommonSelectConfig from "./CommonSelect"
import YearField from "./YearField.tsx"

const GenreSelect = CommonSelectConfig("/titles/utils/genres", "Genre")
const TypeSelect = CommonSelectConfig("/titles/utils/titleTypes", "Type")

export default function SearchPanel() {
  const navigateWithParams = usePageNavigation()
  const params = useParams()
  const allMovies = useSelector(getMovies)

  const handleChange = useCallback(
    (field: string, event: any) => {
      navigateWithParams({ [field]: event.target.value, page: "1" })
    },
    [navigateWithParams]
  )

  const handleDownload = useCallback(() => {
    const file = new File([JSON.stringify(allMovies)], "movies.json", {
      type: "application/json",
    })
    const url = URL.createObjectURL(file)
    downLoadFile(url)
  }, [allMovies])

  const handleClearSearch = useCallback(() => {
    navigateWithParams({
      genre: undefined,
      type: undefined,
      year: undefined,
      page: "1",
    })
  }, [navigateWithParams])

  return (
    <Grid container sx={{ padding: "20px" }} gap={"20px"}>
      <Grid item>
        <GenreSelect value={params.genre || ""} onChange={handleChange.bind(null, "genre")} />
      </Grid>
      <Grid item>
        <TypeSelect value={params.type || ""} onChange={handleChange.bind(null, "type")} />
      </Grid>
      <Grid item>
        <YearField value={params.year || ""} onChange={handleChange.bind(null, "year")} />
      </Grid>
      <Grid item>
        <Button onClick={handleClearSearch}>Clear Search</Button>
      </Grid>
      <Grid item flexGrow={1}></Grid>
      <Grid item>
        <IconButton onClick={handleDownload} title="Download movie list">
          <Download />
        </IconButton>
      </Grid>
    </Grid>
  )
}
