import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import vino1 from "../icons e imagenes/img carousel/vino1.jpg"
import vino2 from "../icons e imagenes/img carousel/vino2.jpg"
import vino3 from "../icons e imagenes/img carousel/vino3.jpg"
import vino4 from "../icons e imagenes/img carousel/vino4.jpg"
import fotodato1 from "../icons e imagenes/img datos/trafic.jpg"
import fotodato2 from "../icons e imagenes/img datos/copadevino.jpg"
import fotodato3 from "../icons e imagenes/img datos/asado.jpg"



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
                        <motion.img initial={{ translate: "0%", opacity: 0 }} animate={index === 0 ? { translate: "0%", opacity: 1 } : {}} transition={{ duration: 1 }} className="vinos" src={fotos[0].img} alt="foto de vino" />
                        <motion.img initial={{ translate: "-100%", opacity: 0 }} animate={index === 1 ? { opacity: 1 } : {}} transition={{ duration: 1 }} className="vinos" src={fotos[1].img} alt="foto de vino" />
                        <motion.img initial={{ translate: "-200%", opacity: 0 }} animate={index === 2 ? { opacity: 1 } : {}} transition={{ duration: 1 }} className="vinos" src={fotos[2].img} alt="foto de vino" />
                        <motion.img initial={{ translate: "-300%", opacity: 0 }} animate={index === 3 ? { opacity: 1 } : {}} transition={{ duration: 1 }} className="vinos" src={fotos[3].img} alt="foto de vino" />
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
                        <div className="inicio-contenedor">
                            <img src={fotodato1} className="inicio-datafoto" />
                            <p className="inicio-p">
                                <span className="inicio-span">
                                    - Enviamos a todo el país. Envío gratis. <br />  <br />
                                    - Excelente atención y servicio. Según opiniones de clientes en Google. <br />  <br />
                                    - El catálogo de vinos online más grande de Argentina.<br />  <br />
                                    - Vinos elegidos a través de catas a ciegas por expertos sommeliers.
                                </span>
                            </p>
                        </div>
                    </div>
                    <div className="inicio-dato" >
                        <div className="inicio-contenedor inicio-contenedor2">
                            <p className="inicio-p">
                                <span className="inicio-span">
                                    BUSCAMOS QUE ELEGIR UN VINO SEA TAN SIMPLE COMO DISFRUTARLO
                                </span><br />
                                Elegimos las mejores etiquetas a través de catas a ciegas.<br /> <br />
                                Te llegan directo a tu casa en cualquier lugar del país.<br /> <br />
                                Descubrís y disfrutás tus vinos junto a los que más querés
                            </p>
                            <img src={fotodato2} className="inicio-datafoto" />
                        </div>
                    </div>
                    <div className="inicio-dato">
                        <div className="inicio-contenedor">
                            <img src={fotodato3} className="inicio-datafoto" />
                            <p className="inicio-p">
                                <span className="inicio-span">
                                    EXPLORÁ LOS PRODUCTOSDE NUESTRA TIENDA ONLINE
                                </span>
                                Vinos, whiskies, spirits y más. Envíos a todo el país, cuotas sin interés, descuentos y promos exclusivas.
                                <button className="inicio-button">ir a la tienda</button>
                            </p>

                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}
