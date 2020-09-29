import { useFormik } from 'formik';
import React from 'react';
import * as Yup from 'yup';
import { Row, TextInput, Button } from 'react-materialize';
import { Services } from '../../services';

import ConstantsList from '../../../Constants';
import { useToasts } from 'react-toast-notifications';

export function LoginForm() {

    const { addToast } = useToasts();

    const loginSchema = Yup.object().shape({
        correo: Yup.string().trim()
            .required('Este campo es obligatorio')
            .email('Correo electronico invalido'),
        clave: Yup.string()
            .required('Este campo es obligatorio')
    });

    const loginUser = values => {
        Services.loginUser(values, ( {data} ) => {
            const { TOKEN_NAME } = ConstantsList;
            const { token } = data;
            localStorage.setItem(TOKEN_NAME, token);
            addToast('Ingreso exitoso', { appearance: 'success' });
        }, (error) => {
            const { status } = error.response
            if(status === 401) {
                addToast('Valida la información por favor', { appearance: 'warning' });
              } else if (status === 403) {
                addToast('Aún no has activado tu cuenta', { appearance: 'info' });
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
            </Row>
        </form>
    );
}