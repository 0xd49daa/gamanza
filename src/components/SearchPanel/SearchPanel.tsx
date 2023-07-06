import { Button, Grid, SelectChangeEvent, TextField } from "@mui/material"
import useSearchParamsValues from "./hooks/useSearchParamValues"
import { ChangeEvent, useCallback } from "react"
import CommonSelectConfig from "./CommonSelect"
import { useDispatch } from "react-redux"
import { FetchMoviesActionCreator } from "../../actions"

export const DEFINITIONS = [
  {
    key: "genre",
    defaultValue: "",
  },
  {
    key: "type",
    defaultValue: "",
  },
  {
    key: "year",
    defaultValue: "",
  },
]

const GenreSelect = CommonSelectConfig("/titles/utils/genres", "Genre")
const TypeSelect = CommonSelectConfig("/titles/utils/titleTypes", "Type")

export default function SearchPanel() {
  const dispatch = useDispatch()
  const [values, setValues] = useSearchParamsValues(DEFINITIONS)

  const handleGenreChange = useCallback(
    (event: SelectChangeEvent<string | null>) => {
      setValues({ genre: event.target.value })
    },
    [setValues]
  )

  const handleTypeChange = useCallback(
    (event: SelectChangeEvent<string | null>) => {
      setValues({ type: event.target.value })
    },
    [setValues]
  )

  const handleYearChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setValues({ year: event.target.value })
    },
    [setValues]
  )

  const handleClearSearch = useCallback(() => {
    setValues({
      genre: "",
      type: "",
      year: "",
    })
    dispatch(FetchMoviesActionCreator())
  }, [setValues])

  const handleApplySearch = useCallback(() => {
    dispatch(FetchMoviesActionCreator())
  }, [dispatch])

  return (
    <Grid container sx={{ padding: "20px" }} gap={"20px"}>
      <Grid item>
        <GenreSelect value={values.genre} onChange={handleGenreChange} />
      </Grid>
      <Grid item>
        <TypeSelect value={values.type} onChange={handleTypeChange} />
      </Grid>
      <Grid item>
        <TextField
          label="Year"
          size="small"
          value={values.year}
          onChange={handleYearChange}
          sx={{ width: "200px" }}
          inputProps={{
            type: "number",
          }}
        />
      </Grid>
      <Grid>
        <Button variant="contained" onClick={handleApplySearch}>
          Apply Search
        </Button>
      </Grid>
      <Grid>
        <Button onClick={handleClearSearch}>Clear Search</Button>
      </Grid>
    </Grid>
  )
}
