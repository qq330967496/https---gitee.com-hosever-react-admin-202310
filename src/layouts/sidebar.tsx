import { Link } from "react-router-dom"
// react-router 5
// import { useHistory } from "react-router-dom"
// react-router 6
import { useNavigate } from "react-router-dom"

export default function Sidebar() {
  const navigate = useNavigate()
  function handleClick() {
    // 路由跳转
    navigate("/home")
  }
  return (
    <div id="sidebar">
      <h1>React Router Contacts</h1>
      <nav>
        <ul>
          <li>
            {/* <Link to={`/home`}>首页</Link> */}
            <a style={{ cursor: "pointer" }} onClick={handleClick}>
              首页
            </a>
          </li>
          <li>
            <Link to={`/contacts/2`}>Your Friend</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}
