import { lazy } from "react"

// 路由懒加载
const Dashboard = lazy(() => import("../../views/home/dashboard"))

export default {
  path: "/home",
  redirect: "/home/dashboard",
  title: "首页",
  isNav: true,
  children: [
    {
      path: "/home/dashboard",
      element: <Dashboard />,
      title: "工作台",
    },
  ],
}
