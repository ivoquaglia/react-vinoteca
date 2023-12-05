import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import vino1 from "../icons e imagenes/img carousel/vino1.jpg"
import vino2 from "../icons e imagenes/img carousel/vino2.jpg"
import vino3 from "../icons e imagenes/img carousel/vino3.jpg"
import vino4 from "../icons e imagenes/img carousel/vino4.jpg"



export const Inicio = () => {

    const initialFotos = [{
        id: 1, img: vino1
    }, {
        id: 2, img: vino2
    }, {
        id: 3, img: vino3
    }, {
        id: 4, img: vino4
    }]

    const [index, setIndex] = useState(0)
    const [counter, setCounter] = useState(0)
    const [fotos, setFotos] = useState(initialFotos)

    const handleClick = (position) => {
        position === 0 ? setIndex(position) : null
        position === 1 ? setIndex(position) : null
        position === 2 ? setIndex(position) : null
        position === 3 ? setIndex(position) : null

    }

    const sliderAutomatic = () => {
        if (counter === 0) {
            setTimeout(() => {
                setIndex(1)
                setCounter(1)
            }, 5500)
        } else if (counter === 1) {
            setTimeout(() => {
                setIndex(2)
                setCounter(2)
            }, 5500)
        } else if (counter === 2) {
            setTimeout(() => {
                setIndex(3)
                setCounter(3)
            }, 5500)
        } else if (counter === 3) {
            setTimeout(() => {
                setIndex(0)
                setCounter(0)
            }, 5500)
        } else {
            return counter
        }
    }

    useEffect(() => {
        sliderAutomatic()
    }, [counter])


    return (
        <>
            <main className="inicio-main">
                <section className="inicio-carousel">
                    <motion.div id="vinoss" className="inicio-vinos">
                        <motion.img initial={{translate:"0%", opacity:0}} animate={index === 0 ? {translate:"0%", opacity:1} : {}} transition={{ duration: 1 }} className="vinos" src={fotos[0].img} alt="foto de vino" />
                        <motion.img initial={{translate:"-100%", opacity:0}} animate={index === 1 ? { opacity:1} : {}} transition={{ duration: 1 }} className="vinos" src={fotos[1].img} alt="foto de vino" />
                        <motion.img initial={{translate:"-200%", opacity:0}} animate={index === 2 ? { opacity:1} : {}} transition={{ duration: 1 }} className="vinos" src={fotos[2].img} alt="foto de vino" />
                        <motion.img initial={{translate:"-300%", opacity:0}} animate={index === 3 ? { opacity:1} : {}} transition={{ duration: 1 }} className="vinos" src={fotos[3].img} alt="foto de vino" />
                    </motion.div>
                    <div className="inicio-buttons">
                        <button className={`inicio-button ${index === 0 ? "inicio-active" : ""}`} onClick={() => handleClick(0)}></button>
                        <button className={`inicio-button ${index === 1 ? "inicio-active" : ""}`} onClick={() => handleClick(1)}></button>
                        <button className={`inicio-button ${index === 2 ? "inicio-active" : ""}`} onClick={() => handleClick(2)}></button>
                        <button className={`inicio-button ${index === 3 ? "inicio-active" : ""}`} onClick={() => handleClick(3)}></button>
                    </div>
                </section>

                <section className="inicio-datos">
                    <div className="inicio-dato">

                    </div>
                    <div className="inicio-dato">

                    </div>
                    <div className="inicio-dato">
                        
                    </div>
                </section>
            </main>
        </>
    )
}
