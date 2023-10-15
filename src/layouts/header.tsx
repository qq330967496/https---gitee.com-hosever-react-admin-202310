import { useNavigate, useLocation } from "react-router-dom"
import router from "../routes/index"
import "./header.scss"
import { useEffect, useState } from "react"

export default function Header() {
  const navigate = useNavigate()
  const { routes } = router // 所有路由
  const navs = routes[0].children?.filter((item) => item.isNav) // 所有顶部导航
  const location = useLocation()
  const [curNav, setCurNav] = useState<AgnosticRouteObject>(navs[0])

  useEffect(() => {
    // console.log("🚀 ~ file: header.tsx:9 ~ location:", location)
    const { pathname } = location
    const _curNav = navs?.find((nav) => pathname.startsWith(nav.path!, 0))
    setCurNav(_curNav)
  }, [location])

  function handleClickNav(nav: AgnosticRouteObject) {
    navigate(nav.redirect)
  }
  return (
    <>
      <header className="header">
        <div className="logo">logo</div>
        <div className="navs">
          {navs?.map((nav) => (
            <div
              className={[
                "nav",
                curNav?.path === nav.path ? "active" : "",
              ].join(" ")}
              key={nav.title}
              onClick={() => handleClickNav(nav)}
            >
              {nav.title}
            </div>
          ))}
        </div>
        <div className="user-info">Sever</div>
      </header>
    </>
  )
}
