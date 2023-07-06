import { TablePagination } from "@mui/material"
import { useCallback } from "react"
import { useDispatch, useSelector } from "react-redux"
import {
  SetPageAndRefetchActionCreator,
  SetPageSizeAndRefetchActionCreator,
} from "../../actions"
import { getMovies, getPage, getPageSize } from "../../selectors"

export default function Paginator() {
  const dispatch = useDispatch()

  const page = useSelector(getPage)
  const pageSize = useSelector(getPageSize)
  const movies = useSelector(getMovies)

  const handleChangePage = useCallback(
    (_: unknown, newPage: number) => {
      dispatch(SetPageAndRefetchActionCreator(newPage + 1))
    },
    [dispatch]
  )

  const handleChangeRowsPerPage = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      dispatch(SetPageSizeAndRefetchActionCreator(+event.target.value))
    },
    [dispatch]
  )

  return (
    <TablePagination
      component={"div"}
      count={page * pageSize < movies.length ? movies.length : -1}
      page={page - 1}
      onPageChange={handleChangePage}
      rowsPerPage={pageSize}
      onRowsPerPageChange={handleChangeRowsPerPage}
      rowsPerPageOptions={[10, 25, 50]}
    />
  )
}
