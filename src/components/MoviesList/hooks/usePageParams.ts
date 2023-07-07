import { useParams } from "react-router-dom"
import { NavigateOptions } from "../../../common/utils"

export default function usePageParams() {
  const { page, pageSize, genre, type, year } = useParams() as NavigateOptions
  return {
    page: page ?? "1",
    pageSize: pageSize ?? "10",
    genre: genre ?? "",
    type: type ?? "",
    year: year ?? "",
  }
}
