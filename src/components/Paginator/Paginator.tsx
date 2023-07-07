import { TablePagination } from "@mui/material"
import { ChangeEvent, memo, useCallback } from "react"

type PaginatorProps = {
  page: number
  pageSize: number
  totalItems: number
  onPageChange: (page: string) => void
  onRowsPerPageChange: (pageSize: string) => void
  hasNextPage: boolean
}

function Paginator(props: PaginatorProps) {
  const { page, pageSize } = props

  const handleChangePage = useCallback(
    (_: unknown, newPage: number) => {
      props.onPageChange((newPage + 1).toString())
    },
    [props.onPageChange]
  )

  const handleChangeRowsPerPage = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      props.onRowsPerPageChange(event.target.value)
    },
    [props.onRowsPerPageChange]
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

export default memo(Paginator)
