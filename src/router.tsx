import MoviesList from "./components/MoviesList/MoviesList"
import { createBrowserRouter } from "react-router-dom"

const router = createBrowserRouter([
  {
    path: "/",
    element: <MoviesList />,
  },
])

export default router
