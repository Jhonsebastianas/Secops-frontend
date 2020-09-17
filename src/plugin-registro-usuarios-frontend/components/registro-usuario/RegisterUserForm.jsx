import React, { Component } from 'react';
import Input from '../../../components/Input';
import Div from '../../../components/Div';
import Label from '../../../components/Label';
import Span from '../../../components/Span';

import { Button, TextInput } from 'react-materialize';

import { validate } from './RegisterUserFormValidator';

export default class RegisterUserForm extends Component {
    state = {
        errors: {}
    }

    render() {
        const { errors } = this.state;
        return (
            <form onSubmit={this.handleSubmit}>
                <TextInput label='Nombres:' name="nombres" id='nombres'
                    onChange={this.handleChange} validate
                    s='12' m='6' l='6'
                    children={errors.nombres && <Span className="helper-text">{errors.nombres}</Span>} />
                
                <TextInput label='Apellidos:' name="apellidos" id='apellidos'
                    onChange={this.handleChange} 
                    s='12' m='6' l='6'
                    children={errors.apellidos && <Span className="helper-text">{errors.apellidos}</Span>} />
                
                <TextInput label='Correo:' email='true' name="correo" id='correo'
                    onChange={this.handleChange} 
                    s='12' m='7' l='7'
                    children={errors.correo && <Span className="helper-text">{errors.correo}</Span>} />
                
                <TextInput label='Clave:' password='true' name='clave' id='clave'
                    onChange={this.handleChange} 
                    s='12' m='5' l='5'
                    children={errors.clave && <Span className="helper-text">{errors.clave}</Span>}/>
                
                <Button>Enviar</Button>
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