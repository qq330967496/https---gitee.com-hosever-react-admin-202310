import { lazy } from "react"

// 路由懒加载
const SystemSettings = lazy(() => import("../../views/settings/SystemSettings"))

export default {
  path: "/settings",
  redirect: "/settings/systemSettings",
  title: "设置",
  isNav: true,
  children: [
    {
      path: "/settings/systemSettings",
      element: <SystemSettings />,
      title: "系统设置",
    },
  ],
}
