import { useCallback } from "react"
import { useNavigate } from "react-router-dom"
import usePageParams from "../../components/MoviesList/hooks/usePageParams.js"
import { NavigateOptions, buildListUrl } from "../utils.js"

export default function usePageNavigation() {
  const values = usePageParams()
  const navigate = useNavigate()

  const navigateWithParams = useCallback(
    (options: NavigateOptions) => {
      navigate({
        pathname: buildListUrl({ ...values, ...options }),
      })
    },
    [navigate, values]
  )

  return navigateWithParams
}
