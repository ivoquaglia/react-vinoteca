import "./styles/styles.scss"
import { Navbar } from "./components/Navbar"
import { Inicio } from "./pages/Inicio"

export const App = () => {

  return (
    <>
      <Navbar></Navbar>
      <Inicio />
    </>
  )
}


