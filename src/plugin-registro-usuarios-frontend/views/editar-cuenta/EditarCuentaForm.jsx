/*import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Services } from '../../services/services';
import { PasswordField } from '../../../components/common/inputs/password/PasswordField';
import { Button, TextInput, Row } from 'react-materialize';
import { GoogleLogin } from 'react-google-login';

import { useHistory } from 'react-router-dom';
import { useToasts } from 'react-toast-notifications';

import stylesGoogle from '../../../styles/stylesGoogle.module.css';
import GoogleImage from '../../../assets/images/google.svg';


export const EditarCuentaForm = () => {

    const registerSchema = Yup.object().shape({
        nombres: Yup.string().trim()
            .required('Este campo es obligatorio'),
        apellidos: Yup.string().trim()
            .required('Este campo es obligatorio'),
        correo: Yup.string().trim()
            .required('Este campo es obligatorio')
            .email('Correo electronico invalido')
            .min(5, 'Mínimo 5 caracteres'),
        clave: Yup.string()
            .required('Este campo es obligatorio')
            .matches('^(?=\\w*\\d)(?=\\w*[A-Z])(?=\\w*[a-z])\\S{8,20}$', 'La clave debe tener al entre 8 y 20 caracteres, un dígito, una letra minúscula y una letra mayúscula.')
    });
};*/