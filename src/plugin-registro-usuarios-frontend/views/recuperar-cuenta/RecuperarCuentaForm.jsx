import React, { useState } from 'react';
import { Row, TextInput, Button } from 'react-materialize';
import { useHistory } from 'react-router-dom';
import { useToasts } from 'react-toast-notifications';
import { Services } from '../../services/services';

export function RecuperarCuentaForm() {

    const [emailRecuperacion, setEmailRecuperacion] = useState('');

    const { addToast } = useToasts();
    const history = useHistory();

    const handleEmailChange = (event) => {
        if(event.target.name === 'correo') {
            setEmailRecuperacion(event.target.value);
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const parametros = {
            correo: emailRecuperacion
        }
        Services.recuperarCuenta(parametros, ({ data }) => {
            addToast('Correo de recuperación envíado', { appearance: 'success' });
            history.push("/notificacion/recuperar-cuenta");
        }, (error) => {
            if (error.response) {
                const { status } = error.response;
                if (status === 409) {
                    addToast('Cuenta no existente', { appearance: 'info' });
                } else if (status === 422) {
                    addToast('Valida la información, por favor', { appearance: 'warning' });
                } else if (status === 500) {
                    addToast('oh no :(, no eres tú somos nosotros, algo a ido mal', { appearance: 'error' });
                }
            } else {
                addToast('oh no :(, no eres tú somos nosotros, algo a ido mal', { appearance: 'error' });
            }
        });
    }

    return (
        <form onSubmit={handleSubmit}>
            <Row>
                <TextInput label='Correo de recuperación:' id='correo' name='correo' value={emailRecuperacion} s={12} m={12} l={12}
                    onChange={handleEmailChange} />
                <Button type='submit' className='col s12'>
                    Recuperar
                </Button>
            </Row>
        </form>
    )
}