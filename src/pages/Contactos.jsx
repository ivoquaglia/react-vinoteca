import trato from "../icons e imagenes/img contacto/trato.png"
import cliente from "../icons e imagenes/img contacto/cliente.png"

export const Contactos = () => {
    return (
        <main className="contacto-main">
            <section className="contacto-section">
                <div className="contacto-card">
                    <img className="c-img" src={trato} alt="trato hecho" />
                    <h4 className="c-h4">VENTAS</h4>
                    <p className="c-p">
                        llamanos al (011)5555-5648 de Lunes a Viernes de 10 a 20 hs. y Sábados de 10 a 16 hs.
                    </p>
                    <h5 className="c-h5">Ventas Corporativas</h5>
                    <p className="c-p">
                        Escribinos a ventasmayoristas@borcelle.com
                    </p>
                </div>
                <div className="contacto-card">
                    <img className="c-img" src={cliente} alt="img cliente" />
                    <h4 className="c-h4">
                        ATENCIÓN AL CLIENTE
                    </h4>
                    <p className="c-p">
                        necesitas hacer una consulta escribinos a atencionalsocio@borcelle.com
                    </p>
                    <p className="c-p">
                        También podes llamarnos al (011)5555-3256 o 0800-345-8943 de Lunes a Viernes de 09 a 18 hs.
                    </p>
                </div>
            </section>
        </main>
    )
}
