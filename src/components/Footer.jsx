import insta from "../icons e imagenes/instagramicon.png";
import youtube from "../icons e imagenes/youtubeicon.png";
import twitter from "../icons e imagenes/twittericon.png";


export const Footer = () => {
    return (
        <footer className="footer-container">
            <div className="footer-div-container">
                <div className="footer-div">
                    <h3 className="f-h3">Bercelle</h3>
                    <li className="f-div-li">
                        <a href="">Tienda</a>
                        <a href="">Blog</a>
                        <a href="">Nosotros</a>
                        <a href="">Contacto</a>
                    </li>
                </div>
                <div className="footer-div">
                    <h3 className="f-h3">Ayuda</h3>
                    <li className="f-div-li">
                        <a href="">Preguntas Frecuentes</a>
                        <a href="">Terminos y Condiciones</a>
                        <a href="">Cancelar Compra</a>
                        <a href="">Ley de defensa del consumidor</a>
                        <a href="">Contacto</a>
                    </li>
                </div>
                <div className="footer-div3">
                    <h3 className="f-h3">Seguinos</h3>
                    <li className="f-div3-li">
                        <a href=""><img src={insta} alt="instagram" /></a>
                        <a href=""><img src={youtube} alt="youtube" /></a>
                        <a href=""><img src={twitter} alt="twitter" /></a>
                    </li>
                </div>
            </div>
            <p className="footer-p">©Borcelle. Todos los derechos reservados. Beber con moderación. Prohibida su venta a menores de 18 años.</p>
        </footer>
    )
}
