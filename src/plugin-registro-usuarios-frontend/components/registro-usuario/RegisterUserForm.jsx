import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import { Button, TextInput, Row } from 'react-materialize';

export const RegisterUserForm = () => {

    const registerSchema = Yup.object().shape({
        nombres: Yup.string().trim()
            .required('Este campo es obligatorio'),
        apellidos: Yup.string().trim()
            .required('Este campo es obligatorio'),
        correo: Yup.string().trim()
            .required('Este campo es obligatorio')
            .email('Correo electronico invalido')
            .min(3, 'Mínimo 5 caracteres'),
        clave: Yup.string()
            .required('Este campo es obligatorio')
            .matches('^(?=\\w*\\d)(?=\\w*[A-Z])(?=\\w*[a-z])\\S{8,20}$', 'La clave debe tener al entre 8 y 20 caracteres, un dígito, una letra minúscula y una letra mayúscula.')
    });

    const formik = useFormik({
        initialValues: {
            nombres: '',
            apellidos: '',
            correo: '',
            clave: '',
        },
        validationSchema: registerSchema,
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <Row>
                <TextInput label='Nombres:' name="nombres" id='nombres' s={12} m={6} l={6}
                    {...formik.getFieldProps('nombres')}
                    children={formik.touched.nombres && formik.errors.nombres ? (<span className="helper-text red-text">{formik.errors.nombres}</span>) : null}
                />
                <TextInput label='Apellidos:' name="apellidos" id='apellidos' s={12} m={6} l={6}
                    {...formik.getFieldProps('apellidos')}
                    children={formik.touched.apellidos && formik.errors.apellidos ? (<span className="helper-text red-text">{formik.errors.apellidos}</span>) : null}
                />
                <TextInput label='Correo:' email name="correo" id='correo' s={12} m={7} l={7}
                    {...formik.getFieldProps('correo')}
                    children={formik.touched.correo && formik.errors.correo ? (<span className="helper-text red-text">{formik.errors.correo}</span>) : null}
                />
                <TextInput label='Clave:' password name='clave' id='clave' s={12} m={5} l={5}
                    {...formik.getFieldProps('clave')}
                    children={formik.touched.clave && formik.errors.clave ? (<span className="helper-text red-text">{formik.errors.clave}</span>) : null}
                />
                <Button type='submit' className='col s12' >
                    Enviar
                </Button>
            </Row>
        </form>
  );
};