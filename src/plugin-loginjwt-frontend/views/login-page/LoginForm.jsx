import { useFormik } from 'formik';
import React from 'react';
import * as Yup from 'yup';
import { Row, TextInput, Button } from 'react-materialize';
import { Services } from '../../services/services';
import { useHistory } from 'react-router-dom';
import { GoogleLogin } from 'react-google-login';

// CSS
import stylesGoogle from '../../../styles/stylesGoogle.module.css';

//Imagen de Google
import Google from '../../../assets/images/google.svg';

import ConstantsList from '../../../constants/Constants';
import { useToasts } from 'react-toast-notifications';

export function LoginForm() {

    const { addToast } = useToasts();

    const {boton, imagenGoogle} = stylesGoogle;

    const history = useHistory();

    const loginSchema = Yup.object().shape({
        correo: Yup.string().trim()
            .required('Este campo es obligatorio')
            .email('Correo electronico invalido'),
        clave: Yup.string()
            .required('Este campo es obligatorio')
    });

    const loginUser = values => {
        Services.login(values, succesLogin, (error) => {
            if (error.response) {
                const { status } = error.response;
                if (status === 400) {
                    addToast('Cuenta registrada con Google', { appearance: 'warning' });
                } else if (status === 401) {
                    addToast('Valida la información por favor', { appearance: 'warning' });
                } else if (status === 403) {
                    addToast('Aún no has activado tu cuenta', { appearance: 'info' });
                } else {
                    addToast('oh no :(, no eres tú somos nosotros, algo a ido mal', { appearance: 'error' });
                }
            } else {
                addToast('oh no :(, no eres tú somos nosotros, algo a ido mal', { appearance: 'error' });
            }
        });
    }

    const formik = useFormik({
        initialValues: {
            correo: '',
            clave: '',
        },
        validationSchema: loginSchema,
        onSubmit: loginUser,
    });

    const respuestaGoogle = (response) => {
        console.log(response);
        console.log(response.profileObj);
        Services.loginWithGoogle(response.profileObj, succesLogin, (error) => {
            if (error.response) {
                const { status } = error.response;
                if (status === 401) {
                    addToast('Valida la información por favor', { appearance: 'warning' });
                } else if (status === 403) {
                    addToast('Aún no has activado tu cuenta', { appearance: 'info' });
                } else {
                    addToast('oh no :(, no eres tú somos nosotros, algo a ido mal', { appearance: 'error' });
                }
            } else {
                addToast('oh no :(, no eres tú somos nosotros, algo a ido mal', { appearance: 'error' });
            }
        });
    }

    const succesLogin = ({ data }) => {
        const { TOKEN_NAME, USER_NAME } = ConstantsList;
        const { token, usuario } = data;
        const user = {};
        user[TOKEN_NAME] = token;
        user['usuario'] = usuario;
        localStorage.setItem(USER_NAME, JSON.stringify(user));
        history.push("home");
    }

    return (
        <form onSubmit={formik.handleSubmit}>
            <Row>
                <TextInput label='Correo:' id='correo' name='correo' s={12} m={7} l={7}
                    {...formik.getFieldProps('correo')}
                    children={formik.touched.correo && formik.errors.correo ? (<span className="helper-text red-text">{formik.errors.correo}</span>) : null}
                />
                <TextInput label='Clave:' password name='clave' id='clave' s={12} m={5} l={5}
                    {...formik.getFieldProps('clave')}
                    children={formik.touched.clave && formik.errors.clave ? (<span className="helper-text red-text">{formik.errors.clave}</span>) : null}
                />

                <Button type='submit' className='col s12' disabled={!formik.isValid} >
                    Ingresar
                </Button>

                <GoogleLogin 
                    clientId="31983275788-597slnqbnq71p45qajk27m718vqj13pq.apps.googleusercontent.com"
                    render={renderProps => (
                        <button className={boton}  onClick={renderProps.onClick} disabled={renderProps.disabled}>
                        <img className={imagenGoogle} src={Google} alt="iconoGoogle"></img>
                        Inicia Sesión con Google</button>
                      )}
                    onSuccess={respuestaGoogle}
                    onFailure={respuestaGoogle}
                    cookiePolicy={'single_host_origin'}
                />
            </Row>
        </form>
    );
}