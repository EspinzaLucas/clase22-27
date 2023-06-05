import { Link } from "react-router-dom"

const EjemploProps01 = Props =>{
    return(
        <h3>Hola {Props.nombre}</h3>
    )
}


const EjemploProps02 = props => {

    const {elemento} = props

    return (
        <ul>
            {elemento.map(elemento => <li key ={elemento}> {elemento}</li>)}
        </ul>
    )
}

const EjemploProps03 = ({titulo,subtitulo,cuerpo}) => {
    return(
        <div>
            <h4>{titulo}</h4>
            <h5>{subtitulo}</h5>
            <p>{cuerpo}</p>
        </div>
    )
}

const EjemploProps04 = props => {
    // cuando haga el evento onChange del input 
    // va a ejecutar a funcion anonima
    // que lo que hace es cambiarValor (recibimos dela propiedad) > mostrando las letras
    // cabiarValor > va a creado en Ejemplo1
    // si o si va a funcionar si esta cabiarValor
    return(
        <label>ver en consola: 
            <input type="text" onChange={(e) => props.cambiarValor(e.target.value)} />
            </label>
    )
}

const EjemploProps05 = props  =>{

    const handerClick= e =>{
        if(props.evetoClick){
            props.evetoClick('me cliqueaste')
        }
    }

    return(
        <p><button onClick={handerClick}>Cliqueame</button></p>
    )
}

export{
    EjemploProps01,
    EjemploProps02,
    EjemploProps03,
    EjemploProps04,
    EjemploProps05
}

// <EjemploProps01 nombre="Flavia"/>