import { createBrowserRouter } from "react-router-dom"
import ErrorPage from "../error-page"
import Root from "../layouts/root"
import home from "./modules/home"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [home],
  },
])

export default router
