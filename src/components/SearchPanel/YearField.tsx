import { TextField } from "@mui/material"
import debounce from "lodash.debounce"
import { useEffect, useMemo, useState } from "react"

type YearFieldProps = {
  value: string
  onChange: (value: string) => void
}

export default function YearField(props: YearFieldProps) {
  const [value, setValue] = useState(props.value)
  const { onChange } = props

  const debouncedChangeHandler = useMemo(
    () =>
      debounce((event: any) => {
        const value = event.target.value
        if (isNaN(Number(value)) || Number(value) < 1896) {
          return
        }
        onChange(event)
      }, 500),
    [onChange]
  )

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
      label="Year (min 1896)"
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
