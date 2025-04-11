import { Outlet } from "react-router-dom"
import { HeaderComponent } from "../components/Header"

const DefaultLayout = () => {
  return (
   <>
        <HeaderComponent/>
        <Outlet/>
    </>
  )
}

export default DefaultLayout