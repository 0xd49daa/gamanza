import { TextField } from "@mui/material"
import debounce from "lodash.debounce"
import { useEffect, useMemo, useState } from "react"

type YearFieldProps = {
  value: string
  onChange: any
}

export default function YearField(props: YearFieldProps) {
  const [value, setValue] = useState(props.value)

  const debouncedChangeHandler = useMemo(() => debounce(props.onChange, 500), [props.onChange])

  useEffect(() => {
    return () => {
      debouncedChangeHandler.cancel()
    }
  }, [])

  useEffect(() => {
    setValue(props.value)
  }, [props.value])

  return (
    <TextField
      label="Year"
      size="small"
      value={value}
      onChange={(e) => {
        setValue(e.target.value)
        debouncedChangeHandler(e)
      }}
      sx={{ width: "200px" }}
      inputProps={{
        type: "number",
      }}
    />
  )
}
