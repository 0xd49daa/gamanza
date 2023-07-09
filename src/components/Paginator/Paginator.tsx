import { TablePagination } from "@mui/material"
import { ChangeEvent, useCallback } from "react"

type PaginatorProps = {
  page: number
  pageSize: number
  totalItems: number
  onPageChange: (page: string) => void
  onRowsPerPageChange: (pageSize: string) => void
  hasNextPage: boolean
}

function Paginator(props: PaginatorProps) {
  const { page, pageSize, onPageChange, onRowsPerPageChange } = props

  const handleChangePage = useCallback(
    (_: unknown, newPage: number) => {
      onPageChange((newPage + 1).toString())
    },
    [onPageChange]
  )

  const handleChangeRowsPerPage = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      onRowsPerPageChange(event.target.value)
    },
    [onRowsPerPageChange]
  )

  const count = page * pageSize < props.totalItems || !props.hasNextPage ? props.totalItems : -1

  return (
    <TablePagination
      component={"div"}
      count={count}
      page={page - 1}
      onPageChange={handleChangePage}
      rowsPerPage={pageSize}
      onRowsPerPageChange={handleChangeRowsPerPage}
      rowsPerPageOptions={[10, 25, 50]}
    />
  )
}

export default Paginator
