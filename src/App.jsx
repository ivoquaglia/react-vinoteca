import "./styles/styles.scss"
import { Navbar } from "./components/Navbar"
import { Inicio } from "./pages/Inicio"
import { Blog } from "./pages/Blog"
import { Footer } from "./components/Footer"

export const App = () => {

  return (
    <>
      <Navbar></Navbar>
      <Blog />
      <Footer></Footer>
    </>
  )
}


