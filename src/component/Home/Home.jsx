import { Outlet } from "react-router-dom"
import SideBar from "../../component/SideBar/SideBar"

import './Home.css'
function Home() {
  return (
    <div className="home-page">
        <SideBar/>
        <div className="All-page">
            <Outlet />
        </div>
      
    </div>
  )
}

export default Home
