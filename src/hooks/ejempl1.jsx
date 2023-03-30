// Ejemplo de uso del hook useState
// Crear un comoponente de tipo funcion y acceder a su estado privado a traves de un hook y ademas poder modificarlo

import React, {useState} from 'react';

const Ejempl1 = () => {

    const valorInicial = 0;
    const personaInicial = {
        nombre : 'Maxi',
        email : 'maxi@maxi.com'
    }

    const [contador, setContador] = useState(valorInicial);
    const [persona, setPersona] = useState(personaInicial);

    function incrementarContador (){
        setContador(contador + 1)
    }

    function actualizarPersona(){
        setPersona({
            nombre: 'Juan',
            email: 'juan@juan.com'
        })
    }

    return (
        <div>
            
        </div>
    );
}

export default Ejempl1;
