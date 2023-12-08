import { motion } from "framer-motion"
import diavino from "../icons e imagenes/img blog/diavino.jpg"
import botella from "../icons e imagenes/img blog/botella.jpg"
import corcho from "../icons e imagenes/img blog/corchos.jpg"
import vinoteca from "../icons e imagenes/img blog/vinoteca.jpg"
import close from "../icons e imagenes/img blog/close.png"
import { useState } from "react"

export const Blog = () => {

    const inicialState = {
        card1: false,
        card2: false,
        card3: false,
        card4: false
    }

    const [active, setActive] = useState(inicialState)

    const handleClose = (name, boolean) => {
        setActive({
            ...active,
            [name]: boolean
        })
    }

    const handleOpen = (name, boolean) => {
        setActive({
            ...active,
            [name]: !boolean
        })
    }


    console.log(active)
    return (
        <main className="blog-main">
            <section className="blog-section">
                <h2 className="blog-h2">Noticias y Novedades del mundo del vino</h2>
                <div className="blog-div">
                    <div onClick={() => handleOpen("card1", active.card1)} className={`${active.card1 ? "blog-active" : "blog-card"}`}>
                        <img className="close" src={close} alt="close" />
                        <h3 className="blog-h3">DÍA DEL VINO ARGENTINO: POR QUÉ SE CELEBRA EL 24 DE NOVIEMBRE</h3>
                        <img className="blog-img" src={diavino} alt="dia del vino" />
                        <p className="blog-p">
                            La bebida nacional tiene su fecha asignada por la ley Nro.26.870, que reivindica el peso cultural y económico de la uva en nuestro país. <br />
                            El Día del Vino Bebida Nacional se celebra todos los 24 de noviembre, con una efeméride destinada a exaltar esta bebida, asentada como parte de la tradición de la Argentina y con un lugar infaltable en la mesa nacional. <br />
                            Aunque se trata de una actividad mayormente asociada con las provincias de Mendoza y San Juan, el Ministerio de Cultura subraya que la vitivinicultura se extiende a 19 provincias del país. Con más de 43 mil hectáreas cultivadas, la cepa Malbec es la más arraigada en nuestro suelo. <br />
                            En nuestro país, la superficie total de viñedos es de 223.585 hectáreas: además de Malbec, hay uvas Cereza, Bonarda, Criolla Grande, Cabernet Sauvingnon, Syrah y Pedro Giménez, lo que representa el 3 por ciento de la superficie mundial y posiciona al país en el quinto lugar como productor de vinos en el ranking global. <br />
                            Por todo este peso cultural, desde el 2 de agosto de 2013, día de la publicación oficial de la ley Nro. 26.870 se declaró al vino argentino como nuestra bebida nacional. En la misma legislación, también quedó establecido el 24 de noviembre como el Día Nacional del Vino. <br />
                            Es que la bebida también apuntala al comercio nacional: la Argentina exporta vino a 127 países, siendo Estados Unidos, Reino Unido, Canadá, Brasil y Países Bajos los mayores importadores. La industria vitivinícola genera más de 106.000 puestos de trabajo de manera directa y 280.000 de forma indirecta. Son más de 17.000 los productores que cosechan las uvas para las más de 900 bodegas que abastecen el mercado interno como externo.
                        </p>
                    </div>

                    <div onClick={() => handleOpen("card2", active.card2)} className={`${active.card2 ? "blog-active" : "blog-card"}`}>
                        <img className="close" src={close} alt="close" />
                        <h3 className="blog-h3">CÓMO ABRIR UNA BOTELLA DE VINO SIN PRECISAR DE UN SACACORCHOS CON ESTOS INGENIOSOS TRUCOS</h3>
                        <img className="blog-img" src={corcho} alt="como sacar corcho" />
                        <p className="blog-p">
                            Te presentamos seis formas creativas de realizar esta acción en caso de que te encuentres sin este elemento esencial <br />
                            En ocasiones, la necesidad de abrir una botella de vino se presenta de manera inesperada, y no siempre disponemos de un sacacorchos a la mano. No obstante, existen métodos ingeniosos para disfrutar de esa deliciosa bebida sin necesidad de la herramienta tradicional.<br />
                            El vino es una bebida alcohólica obtenida a partir de la fermentación de los jugos de uvas, aunque también puede elaborarse a partir de otras frutas, como manzanas o peras, en cuyo caso se conoce como vino de frutas. El proceso de elaboración del vino se llama vinificación y es una combinación de arte y ciencia que fue perfeccionada a lo largo de miles de años.<br />
                            Por su parte, un sacacorchos es una herramienta diseñada específicamente para extraer los corchos de las botellas de vino de manera eficiente y sin dañar el corcho ni el vino. Es una pieza fundamental para cualquier amante del vino y se utiliza para abrir botellas selladas con corchos de corcho tradicionales.<br />
                            Ahora bien, es normal encontrarse en una situación en la que no se tenga un sacacorchos a la mano para abrir una botella de vino, pero afortunadamente existen trucos caseros que pueden sacarlo del apuro. A continuación, le presentamos seis métodos ingeniosos para abrir una botella de vino sin un sacacorchos:<br /> <br />
                            1. Empujá el corcho<br /> <br />
                            Para este truco, necesitarás un objeto con extremos redondeados que no dañe la botella ni el corcho, como un bolígrafo o el envase cilíndrico de un labial.<br />
                            Colocá la botella en una superficie firme y presioná el objeto contra el corcho. Empujá el corcho hacia abajo hasta que caiga dentro de la botella, teniendo cuidado de que el vino no salpique.<br /> <br />
                            2. Con un cuchillo<br /> <br />
                            Un cuchillo afilado también puede ayudarte. Inserta la hoja del cuchillo en el corcho y girá suavemente mientras ejerce una ligera presión hacia arriba. Una vez que el cuchillo esté lo suficientemente adentrado en el corcho, podrá girar y extraerlo lentamente.<br /> <br />
                            3. Utilizá un zapato<br /> <br />
                            Este truco curioso y efectivo requiere un zapato con suela de goma. Coloque la botella en el zapato de manera que el corcho quede frente a usted y golpeá la planta del zapato contra una pared mientras sostenés la botella con cuidado. Repita este proceso hasta que el corcho se desplace lo suficiente como para poder sacarlo con las manos.<br /> <br />
                            4. Con un tornillo<br /> <br />
                            Necesitará un tornillo con una distancia entre las roscas lo más grande posible y unos alicates. Inserta el tornillo en el corcho y utilice los alicates para tirar hacia arriba con suavidad. Una vez que el corcho esté lo suficientemente expuesto, podrá agarrarlo con las manos y retirarlo.<br /> <br />
                            5. Usá un gancho<br /> <br />
                            Enderezá el gancho de una percha de alambre y formá un pequeño anzuelo en el extremo. Inserta el alambre en el corcho, gire el gancho hacia abajo y luego hacia el centro de la botella. Con cuidado, tirá del corcho gradualmente hasta sacarlo por completo.<br /> <br />
                            6. Con unas tijeras<br /> <br />
                            Utilizá un par de tijeras pequeñas para niños. Inserta la cuchilla delgada en el corcho y girá el mango de las tijeras con cuidado mientras sostiene la botella firmemente.<br /> <br />

                            El corcho debería salir lo suficiente como para ser agarrado con las manos.<br />
                            Estos trucos te permitirán abrir una botella de vino sin un sacacorchos, aunque se recomienda utilizar estas soluciones solo en situaciones de emergencia. Por supuesto, la forma más segura y eficiente de abrir una botella de vino sigue siendo un sacacorchos.<br />
                        </p>
                    </div>

                    <div onClick={() => handleOpen("card3", active.card3)} className={`${active.card3 ? "blog-active" : "blog-card"}`}>
                        <img className="close" src={close} alt="close" />
                        <h3 className="blog-h3">MÁS GRANDE ES PREFERIBLE. ¿POR QUÉ EL VINO AÑEJA MEJOR EN BOTELLAS DE 1,5, 3 Y HASTA 30 LITROS?</h3>
                        <img className="blog-img" src={botella} alt="botella grande" />
                        <p className="blog-p">
                            Cada vez más bodegas apuestan por formatos de gran calibre como Magnum, Doble Magnum o Imperial, e incluso ya hay vinotecas que solo venden botellas grandes <br />
                            En materia de vino, el tamaño importa. La botellas de grandes calibres como las llamadas Magnun (1,5 litros) o Imperial (6 litros) ofrecen numerosas ventajas para los amantes del vino por sobre las convencionales botellas de 750 ml. El vino evoluciona mejor en ellas e incluso su uso conlleva un menor impacto sobre el medio ambiente. Y, como si fuera poco, ¡están de moda! <br />
                            “Hoy hay una tendencia en las grandes bodegas del mundo a usar las botellas de formatos grandes, inclusive para vinos Premier Grand Cru. En Reino Unido, por ejemplo, hay vinotecas que ofrecen únicamente este tipo de presentaciones”, cuenta Mariano Di Paola, enólogo de Rutini Wines. “A nivel consumidor, son presentaciones que impactan y permiten servir en grandes mesas”, agrega. <br />
                            Pablo Cúneo, enólogo de Luigi Bosca, coincide: “Son de gran utilidad en gastronomía, ya que permiten con un número menor de botellas realizar un gran servicio en un restaurante. Pero lo más importante es la relación vino-aire que queda en el cuello de la botella, que en una Magnum es menor que en una botella convencional”. El oxígeno es el principal enemigo del vino, y más cuando el plan es que la bebida evolucione años (o incluso décadas) en la botella. <br />
                            “El hecho de tener el doble de volumen y un espacio de cabeza similar a una botella de 750ml., hace que el vino en una Magnum esté más protegido del oxígeno y, por lo tanto, su evolución en la botella sea mucho más lenta. Es una muy buena opción para añejar grandes vinos por períodos muy largos de tiempo”, señala Matías Ciciani, enólogo de Escorihuela Gascón.<br />
                            ¿Esto vale solo para los tintos o el camino de la guarda también vale para blancos y espumantes? “Al tener polifenoles, en los vinos tintos esperás una mejor evolución que en los blancos, pero los blancos también envejecen muy bien. Si bien hay mas oxidación en el color y la parte aromática, son vinos que siguen mostrando mucha vida”, responde Ernesto “Nesti” Bajda, enólogo de la bodega Catena Zapata.<br />
                            Y en cuanto a los espumantes, agrega, “tenés un ambiente saturado de dióxido de carbono que brinda esa seguridad extrema de que no tenés nada de oxígeno”. No por nada los formatos grandes son clásicos en el mundo de las burbujas de alta gama.
                        </p>
                    </div>

                    <div onClick={() => handleOpen("card4", active.card4)} className={`${active.card4 ? "blog-active" : "blog-card"}`}>
                        <img className="close" src={close} alt="close" />
                        <h3 className="blog-h3">5 PINOT NOIR QUE MARCARON UN HITO ENTRE LOS VINOS ARGENTINOS Y QUE DEBÉS PROBAR</h3>
                        <img className="blog-img" src={vinoteca} alt="vinoteca" />
                        <p className="blog-p">
                            Desde el Pinot Noir más austral del mundo, hasta el primer vino oceánico de la Argentina, cinco excelentes vinos para descubrir. <br />
                            Cuando a un enólogo se le suele preguntar cuál es la variedad más desafiante, es muy probable que no dude un minuto y responda, en un largo suspiro: "Pinot Noir". <br />
                            ¿Por qué es un vino difícil de elaborar? Una de las principales variables está vinculada con el aspecto sanitario: tal como reseñábamos en esta nota reciente, la planta es muy sensible a la podredumbre en general. Por lo tanto, los suelos pobres y bien drenados y con muchas piedras son los indicados para la variedad. <br />
                            "Es un cepaje muy desafiante tanto en el cultivo del viñedo como en la elaboración de los vinos en la bodega. El desafío vitícola empieza en la selección del clon y el lugar de plantación adecuados, los mejores resultados se dan en zonas frías, que ayudan a expresar todo su carácter. Luego, el manejo y conducción del viñedo es clave para asegurar el equilibrio, madurez y sanidad necesarios", comentaba Pablo Cúneo, director de enología de Luigi Bosca. <br />
                            Hay un dato clave que también sirve para entender el espíritu de esta cepa: el 94% de los vinos Pinot Noir son varietales. Es decir que solo un 6% se elabora como blend junto a otra cepa. <br />
                            Y la respuesta sobre las razones por las cuales a esta variedad no le gusta compartir el protagonismo está en sus taninos muy ligeros y en su composición fenólica, variables difíciles de combinar con otras cepas y, más aún, a la hora de pensar en un vino que evolucione en el tiempo. <br />
                            A continuación, cinco vinos Pinot Noir provenientes de viñedos que, por diferentes razones, marcaron un hito en la vitivinicultura argentina y que vale la pena descubrir, especialmente en estos momentos en que se está celebrando su día en el mundo: <br /> <br />
                            1. El primer Pinot Noir océanico de Argentina<br /> <br />
                            2. El Pinot Noir más austral del planeta<br /> <br />
                            3. El Pinot Noir del mayor productor de esta variedad en Argentina<br /> <br />
                            4. El Pinot Noir del productor número 1 de la Patagonia<br /> <br />
                            5. El Pinot Noir que nace del viñedo más alto de Argentina
                        </p>
                    </div>
                </div>

            </section>
        </main>
    )
}
