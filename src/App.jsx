import "./styles/styles.scss"
import { Navbar } from "./components/Navbar"
import { Inicio } from "./pages/Inicio"
import { Blog } from "./pages/Blog"
import { Footer } from "./components/Footer"
import { Route, Routes } from "react-router-dom"
import { Nosotros } from "./pages/Nosotros"
import { Contactos } from "./pages/Contactos"

export const App = () => {

  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Inicio />}></Route>
        <Route path="/blog" element={<Blog />}></Route>
        <Route path="/nosotros" element={<Nosotros/>}></Route>
        <Route path="/contacto" element={<Contactos/>}></Route>
        <Route path="/*" element={<Inicio />}></Route>
      </Routes>
      <Footer></Footer>
    </>
  )
}


