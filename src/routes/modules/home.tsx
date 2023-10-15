import { lazy } from "react"

// 路由懒加载
const Home = lazy(() => import("../../views/home"))

export default {
  path: "/home",
  element: <Home />,
}
