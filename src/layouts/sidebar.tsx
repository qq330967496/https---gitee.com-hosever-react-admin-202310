import type { MenuProps } from "antd"
import { Menu } from "antd"
// react-router 5
// import { useHistory } from "react-router-dom"
// react-router 6
import { useNavigate } from "react-router-dom"
// import router from "../routes/index"
// setTimeout(() => {
//   console.log("🚀 ~ file: sidebar.tsx:9 ~ router:", router)
// })

type MenuItem = Required<MenuProps>["items"][number]
function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: "group"
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem
}

const items: MenuProps["items"] = [getItem("工作台", "home-dashboard", null)]
// const routes = router

export default function Sidebar() {
  const navigate = useNavigate()
  function handleClick(): MenuProps["onClick"] {
    // 路由跳转
    navigate("/home/dashboard")
  }
  return (
    <div className="sidebar">
      <Menu
        onClick={handleClick}
        style={{ width: 256 }}
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        mode="inline"
        items={items}
      />
    </div>
  )
}
