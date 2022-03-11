import React, { Component } from "react";

class Formulario extends Component{
    state = { }
    render() {
        return ( 
            <div className="buscador row">
                <div className="col s12 m8 offset-2">
                    <form>
                        <h2>Encuentra noticias por categoría</h2>

                        <div className="input-field col s12 m8">
                            <select>
                                <option value="general"> General </option>
                                <option value="business"> Negocio </option>
                                <option value="entertainment"> Entretenimiento </option>
                                <option value="health"> Salud </option>
                                <option value="science"> Ciencia </option>
                                <option value="sports"> Deporte </option>
                                <option value="technology"> Tecnología </option>
                            </select>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}
export default Formulario;