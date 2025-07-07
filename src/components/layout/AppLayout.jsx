import { Header } from "../UI/Header"
import { Outlet } from "react-router-dom"
import { Footer } from "../UI/Footers"

export const AppLayout = () => {
  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
  )
}