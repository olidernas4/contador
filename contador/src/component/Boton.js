import React from 'react';
import './Boton.css'

function Boton({texto,btnclic,readyClic}){
    return(
        <button
            className={ btnclic ? 'btn-clic': 'btn-restart'}
            onClick={readyClic}>
            {texto}
        </button>
    );
}

export default Boton;