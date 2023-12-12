import camion from "../icons e imagenes/img nosotros/camion.jpg";
import reunion from "../icons e imagenes/img nosotros/reunion.jpg"

export const Nosotros = () => {
    return (
        <main className="nosotros-main">
            <section className="nosotros-section">
                <div className="nosotros-div">
                    <h3 className="nosotros-h3">
                        ¿Como es la cata a ciegas?
                        COMO ESLA SELECCIÓN DE VINOS</h3>
                    <p className="nosotros-p">
                        Todos los meses nuestro equipo de sommeliers realiza mediante catas a ciegas una seleccion de vinos para cada una de nuestras lineas, contemplando a todas las bodegas que deseen paricipar, varietales y regiones de Argentina.
                    </p>
                </div>
                <div className="nosotros-div2">
                    <div className="n-conteiner">
                        <h4 className="n-h4">
                            1.200.000 BOTELLAS DISTRIBUIDAS
                        </h4>
                        <p className="n-p">
                            Anualmente distribuimos más de un millón doscientas mil botellas en todo el país, lo que nos convierte relevantes para el mundo del vino nacional tanto para grandes bodegas como para la mas pequeñas.
                        </p>
                    </div>
                    <img className="n-div2-img" src={camion} alt="transporte" />
                </div>
                <div className="nosotros-div2">
                    <img className="n-div2-img" src={reunion} alt="nosotros juntos" />
                    <div className="n-conteiner">
                        <h4 className="n-h4">
                            SOMOS COMUNIDAD
                        </h4>
                        <p className="n-p">
                            Somos un equipo apasionado por el mundo del vino, y buscamos compartir con nuestra comunidad el GUSTO DE DESCUBRIR nuevas etiquetas mes a mes a través de experiencias únicas y exclusivas para los socios, con gran vocación de servicio.
                        </p>
                    </div>
                </div>
            </section>
        </main>
    )
}


