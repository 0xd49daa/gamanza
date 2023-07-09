import FormControl from "@mui/material/FormControl"
import InputLabel from "@mui/material/InputLabel"
import MenuItem from "@mui/material/MenuItem"
import Select, { SelectChangeEvent } from "@mui/material/Select"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { FetchFieldActionCreator } from "../../common/actions"
import { getField } from "../../common/selectors"
import { LoadField } from "../../common/types"

type SelectProps = {
  value: string | null
  onChange: (value: SelectChangeEvent<string | null>) => void
}

export default function CommonSelectConfig(field: LoadField, label: string) {
  return function CommonSelect(props: SelectProps) {
    const options = useSelector(getField(field))
    const dispatch = useDispatch()

    useEffect(() => {
      if (!options) {
        dispatch(FetchFieldActionCreator(field))
      }
    }, [dispatch, options])

    if (!options) {
      return null
    }

    return (
      <FormControl sx={{ width: "200px" }}>
        <InputLabel size="small">{label}</InputLabel>
        <Select size="small" label={label} value={props.value} onChange={props.onChange}>
          {options.map((option, index) => {
            return (
              <MenuItem key={index} value={option || undefined}>
                {option}
              </MenuItem>
            )
          })}
        </Select>
      </FormControl>
    )
  }
}
