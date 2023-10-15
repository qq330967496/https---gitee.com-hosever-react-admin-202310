import { Outlet } from "react-router-dom"
import Sidebar from "./sidebar"
import Header from "./header"
import { Suspense } from "react"
import "./root.scss"

export default function Root() {
  return (
    <>
      <div className="container">
        <Header></Header>
        <div className="main">
          <Sidebar></Sidebar>
          <div className="right">
            <Suspense>
              <Outlet />
            </Suspense>
          </div>
        </div>
      </div>
    </>
  )
}
