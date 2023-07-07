import MovieItem from "../components/MovieItem/MovieItem.tsx"
import MoviesList from "../components/MoviesList/MoviesList.tsx"
import { createBrowserRouter, Navigate } from "react-router-dom"
import { buildListUrl } from "./utils.ts"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to={buildListUrl({ page: "1", pageSize: "10" })} />,
  },
  {
    path: "/page/:page/pageSize/:pageSize/genre?/:genre?/type?/:type?/year?/:year?",
    element: <MoviesList />,
  },
  {
    path: "/movie/:id",
    element: <MovieItem />,
  },
])

export default router
