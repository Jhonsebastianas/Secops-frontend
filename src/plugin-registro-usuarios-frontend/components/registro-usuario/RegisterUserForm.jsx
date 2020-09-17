import React, { Component } from 'react';
import Input from '../../../components/Input';
import Div from '../../../components/Div';
import Label from '../../../components/Label';
import Span from '../../../components/Span';

import { validate } from './RegisterUserFormValidator';

export default class RegisterUserForm extends Component {
    state = {
        errors: {}
    }

    render() {
        const { errors } = this.state;
        return (
            <form onSubmit={this.handleSubmit}>
                <Div className='input-field col s12 m6 l6'>
                    <Input type='text' placeholder='Nombres' name="nombres" id='nombres' onChange={this.handleChange} />
                    <Label htmlFor="nombres">Nombres:</Label>
                    {errors.nombres && <Span className="helper-text">{errors.nombres}</Span>}
                </Div>
                <Div className='input-field col s12 m6 l6'>
                    <Input type='text' placeholder='Apellidos' name="apellidos" id='apellidos' onChange={this.handleChange} />
                    <Label htmlFor="apellidos">Apellidos:</Label>
                    {errors.apellidos && <Span className="helper-text">{errors.apellidos}</Span>}
                </Div>
                <Div className='input-field col s12 m7 l7'>
                    <Input type='email' placeholder='Correo' datalength='50' name="correo" id='correo'
                        onChange={this.handleChange} />
                        <Label htmlFor="correo">Correo:</Label>
                        {errors.correo && <Span className="helper-text">{errors.correo}</Span>}
                </Div>
                <Div className='input-field col s12 m5 l5'>
                    <Input type='password' placeholder='Clave' name='clave' id='clave'
                        onChange={this.handleChange} />
                        <Label htmlFor="clave">clave:</Label>
                        {errors.clave && <Span className="helper-text">{errors.clave}</Span>}
                </Div>
                <Input type="submit" value="Enviar" />
            </form>
        );
    }

    // Recibimos un evento, y de este evento usamos el target que es el elemento actual
    handleChange = ({ target }) => {
        const { name, value } = target;
        this.setState({ [name]: value })
    }

    handleSubmit = e => {
        //Evita que se envíe el formulario al hacer clic en el botón submit
        e.preventDefault();
        const { errors, ...fields } = this.state; // Se toma todos los elementos en el state menos los errores
        const result = validate(fields);
        // Object.keys : Me devuelve un arreglo con las propiedades del objeto
        this.setState({errors: result});
        if (!Object.keys(result).length) {
            // Enviar el formulario!!!
            console.log('formulario valido');
            // Reinicia el formulario
            e.target.reset();
        }
    }
}