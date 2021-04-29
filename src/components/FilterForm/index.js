import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import './index.css'

const FilterForm = () => {
    return(
        <div className="filter-container">
        <div className="title-form">
        <FontAwesomeIcon size="1x" color="#1d43ad" icon={faUser} />  Filtrar busqueda
        </div>
        <form className="form-filter">            
            <label>Nombre</label>
            <input /> <br/>
            <label>Apellidos</label>
            <input /> <br/>
            <label>Identificación</label>
            <input /> <br/>
            <label>Rol asociado</label>
            <input /> <br/>
            <label>Estado </label><br/>
            <input /> <br/>
            <label>Contraseña</label>
            <input /> <br/>
            <label>Telefono</label>
            <input /> <br/>
            <label>Correo electrónico</label>
            <input /> <br/>
            <div className="buttons-filter">
                <button className="accept-button">
                    Filtrar
                </button>
                <button className="cancel-button">
                    Limpiar
                </button>
            </div>
        </form>
        </div>
    )
}

export default FilterForm;