import { EjemploProps01, EjemploProps02, EjemploProps03,EjemploProps04, EjemploProps05 } from "../componente/Props"



const name = 'pablo'

const lista = ['manzanas', 'bananas', 'peras', 'paltas']

const mostrarValor = valor =>{
    console.log(valor)
}

const Ejemplo1 = (props) => {
    return (
        <div>
            <h1>hola soy la pagina de Ejemplo1</h1>
            <EjemploProps01 nombre='Lucas'/>
            <EjemploProps01 nombre={name} />
            <hr/>
            {/* liatado de elementos */}
            <EjemploProps02 elemento={lista} />
            <hr/>
            {/* multiples propiedades y dstruturing */}
            <EjemploProps03 titulo='noticia X' subtitulo='aca estamos prendiendo react' cuerpo='soy el cuerpo de la noticia'/>
            <hr/>
            <h3> evento - al tener Cambiar Valor funciona paraque reciba el manejador</h3>
            <EjemploProps04 cambiarValor={mostrarValor}/>
            <br/>
            {/* este ejemplo no funcionaria porque le falta la propiedad */}
            {/* <EjemploProps04/> */}
            <hr/>
            <h3>Evento - tenemos que if que conatrola antes</h3>
            <EjemploProps05 evetoClick={mostrarValor}/>
            {/* en este ejemplo no se rompe la pagina proque controlamos desde if*/}
            <EjemploProps05 />

        </div>
    )
}

export default Ejemplo1