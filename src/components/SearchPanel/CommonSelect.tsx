import FormControl from "@mui/material/FormControl"
import InputLabel from "@mui/material/InputLabel"
import MenuItem from "@mui/material/MenuItem"
import Select, { SelectChangeEvent } from "@mui/material/Select"
import { useEffect, useState } from "react"

type SelectProps = {
  value: string | null
  onChange: (value: SelectChangeEvent<string | null>) => void
}

export default function CommonSelectConfig(url: string, label: string) {
  return function CommonSelect(props: SelectProps) {
    const [options, setOptions] = useState<string[]>([])

    useEffect(() => {
      async function fetchGenre() {
        const response = await fetch(
          new URL(url, import.meta.env.VITE_API_URL),
          {
            method: "GET",
            headers: {
              "X-RapidAPI-Key": import.meta.env.VITE_RAPIDAPI_KEY,
              "X-RapidAPI-Host": "moviesdatabase.p.rapidapi.com",
            },
          }
        )
        const data = await response.json()
        setOptions(data.results)
      }

      fetchGenre()
    }, [])

    return (
      <FormControl sx={{ width: "200px" }}>
        <InputLabel size="small">Genre</InputLabel>
        <Select
          size="small"
          label={label}
          value={props.value}
          onChange={props.onChange}
        >
          {options.map((option) => {
            return (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            )
          })}
        </Select>
      </FormControl>
    )
  }
}
