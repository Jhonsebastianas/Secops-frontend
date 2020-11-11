import React, { useState } from 'react';
import { Row, TextInput, Button, Icon } from 'react-materialize';
import { useHistory } from 'react-router-dom';
import { useToasts } from 'react-toast-notifications';
import { Services } from '../../../services/services';
import { useParams } from "react-router-dom";
import { useFormik } from 'formik';
import * as Yup from 'yup';

const styles = {
    showPasswordDiv: {
        right: '0px',
        cursor: 'pointer',
        zIndex: '9999',
        WebkitUserSelect: 'none',
        MozUserSelect: 'none',
        MsUserSelect: 'none',
        UserSelect: 'none',
    },
    showPasswordIcon: {
        cursor: 'pointer',
        zIndex: '9999',
    }
};

export function RestablecerClaveForm() {

    const { showPasswordDiv, showPasswordIcon } = styles;
    const { tokenUsuario } = useParams();
    const { addToast } = useToasts();
    const history = useHistory();

    const newPasswordSchema = Yup.object().shape({
        clave: Yup.string()
            .required('Este campo es obligatorio')
            .matches('^(?=\\w*\\d)(?=\\w*[A-Z])(?=\\w*[a-z])\\S{8,20}$', 'La clave debe tener al entre 8 y 20 caracteres, un dígito, una letra minúscula y una letra mayúscula.')
    });

    const restablecerClave = (value) => {
        const parametros = {
            clave: value.clave,
            token: tokenUsuario
        }
        Services.restablecerClave(parametros, ({ data }) => {
            addToast('Contraseña restablecida', { appearance: 'success' });
        }, (error) => {
            if (error.response) {
                const { status } = error.response;
                if (status === 409) {
                    addToast('El usuario no existe', { appearance: 'info' });
                } else if (status === 401) {
                    addToast('El tiempo para recuperar la cuenta a expirado', { appearance: 'warning' });
                } else if (status === 500) {
                    addToast('oh no :(, no eres tú somos nosotros, algo a ido mal', { appearance: 'error' });
                }
            } else {
                addToast('oh no :(, no eres tú somos nosotros, algo a ido mal', { appearance: 'error' });
            }
        });
        // history.push("/notificacion/recuperar-cuenta");
    }

    const formik = useFormik({
        initialValues: {
            clave: '',
        },
        validationSchema: newPasswordSchema,
        onSubmit: restablecerClave,
    });

    /**  Mostramos y no mostramos la clave */
    const [visiblePassword, setVisiblePassword] = useState('password');
    const showPassword = () => {
        const typeInput = (visiblePassword === 'password') ? 'text' : 'password';
        setVisiblePassword(typeInput);
    }

    return (
        <form onSubmit={formik.handleSubmit}>
            <Row>
                <TextInput label='Clave:' type={visiblePassword} name='clave' id='clave' s={12}
                    icon={<div style={showPasswordDiv} onClick={showPassword}><Icon className={showPasswordIcon}>visibility</Icon></div>}
                    {...formik.getFieldProps('clave')}
                    children={formik.touched.clave && formik.errors.clave ? (<span className="helper-text red-text">{formik.errors.clave}</span>) : null}
                />
                <Button type='submit' className='col s12' disabled={!formik.isValid}>
                    Restablecer
                </Button>
            </Row>
        </form>
    )
}