import React from 'react';
import { Row, Button } from 'react-materialize';
import { useHistory } from 'react-router-dom';
import { useToasts } from 'react-toast-notifications';
import { Services } from '../../../services/services';
import { useParams } from "react-router-dom";
import { useFormik } from 'formik';
import { PasswordField } from '../../../../components/common/inputs/password/PasswordField';
import * as Yup from 'yup';

export function RestablecerClaveForm() {
    const { tokenUsuario } = useParams();
    const { addToast } = useToasts();
    const history = useHistory();

    const newPasswordSchema = Yup.object().shape({
        clave: Yup.string()
            .required('Este campo es obligatorio')
            .matches('^(?=\\w*\\d)(?=\\w*[A-Z])(?=\\w*[a-z])\\S{8,20}$', 'La clave debe tener al entre 8 y 20 caracteres, un dígito, una letra minúscula y una letra mayúscula.'),
        claveConfirmada: Yup.string()
            .test('ok', 'Las constaseñas no coinciden', function (value) {
                return this.parent.clave === value;
            }),
    });

    const restablecerClave = (value) => {
        const parametros = {
            clave: value.clave,
            token: tokenUsuario
        }
        Services.restablecerClave(parametros, ({ data }) => {
            addToast('Contraseña restablecida', { appearance: 'success' });
            history.push("/login");
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
            claveConfirmada: '',
        },
        validationSchema: newPasswordSchema,
        onSubmit: restablecerClave,
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <Row>
                <PasswordField label='Nueva contraseña' name='clave' id='clave' s={12}
                    {...formik.getFieldProps('clave')}
                    children={formik.touched.clave && formik.errors.clave ? (<span className="helper-text red-text">{formik.errors.clave}</span>) : null}
                />
                <PasswordField label='Repetir contraseña' name='claveConfirmada' id='claveConfirmada' s={12}
                    {...formik.getFieldProps('claveConfirmada')}
                    children={formik.touched.claveConfirmada && formik.errors.claveConfirmada ? (<span className="helper-text red-text">{formik.errors.claveConfirmada}</span>) : null}
                />
                <Button type='submit' className='col s12' disabled={!formik.isValid}>
                    Restablecer
                </Button>
            </Row>
        </form>
    )
}