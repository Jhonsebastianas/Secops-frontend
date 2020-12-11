import React, { useState } from 'react';
import { Col, Row, TextInput, Card, Button, Checkbox } from 'react-materialize';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useHistory } from 'react-router-dom';
import { useToasts } from 'react-toast-notifications';
import { Services } from '../../services/services';
import loginUtils from '../../../plugin-loginjwt-frontend/utils/login.utils'; 

const validate = values => {
    const errors = {};
    if (!values.hogarActual) {
        errors.hogarActual = 'Seleccione si este hogar es en el que vive actualmente.'
    }
    if (!values.estrato) {
        errors.estrato = 'Seleccione el estrato de la vivienda.'
    }
    if (!values.tipoHogar) {
        errors.tipoHogar = 'Seleccione el tipo de hogar de la vivienda'
    }
    return errors;
}

export function RegisterHomeForm() {

    const { addToast } = useToasts();
    const history = useHistory();

    const [hogar, setHogar] = useState({});
    const [servicios, setServicios] = useState([]);
    const [errors, setErrors] = useState({});

    const handledChanged = ({ target }) => {
        const { name, value } = target;
        console.log(`${name}: ${value}`);
        setHogar({ ...hogar, [name]: value });
    }

    const handledServicio = (event) => {
        console.log(event.target);
        if (event.target.checked) {
            setServicios([...servicios, event.target.value]);
        } else {
            const posService = servicios.indexOf(event.target.value) + 1;
            setServicios([...servicios.splice(posService, 1)]);
        }
    }

    const registerHomeSchema = Yup.object().shape({
        nombre: Yup.string().trim()
            .max(40, 'Máximo 40 caracteres')
            .required('Este campo es obligatorio'),
        numeroContrato: Yup.string().trim()
            .min(6, 'Mínimo 6 números')
            .max(12, 'Máximo 12 números')
            .matches(/^([0-9])*$/, 'Solo números')
            .required('Este campo es obligatorio'),
    });

    const registerNewHome = (values) => {
        const { nombre, numeroContrato } = values;
        const nuevoHogar = {
            ...hogar,
            'servicios': servicios,
            'nombre': nombre,
            'numeroContrato': numeroContrato,
            'username': loginUtils.getUsernameUser(),
        };
        const error = validate(nuevoHogar);
        setErrors(error);
        if (!Object.keys(error).length) {
            nuevoHogar.hogarActual = (hogar.hogarActual === 'Si')? true: false;
            Services.registerNewHome(nuevoHogar, () => {
                addToast('Hogar registrado con exito', { appearance: 'success', autoDismiss: true });
                history.push("home");
            }, (error) => {
                if (error.response) {
                    const { status } = error.response;
                    if (status === 409) {
                        addToast('Hogar actualmente existente', { appearance: 'info' });
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
    }

    const formik = useFormik({
        initialValues: {
            nombre: '',
            numeroContrato: '',
        },
        validationSchema: registerHomeSchema,
        onSubmit: registerNewHome,
    });


    return (
        <form onSubmit={formik.handleSubmit}>
            <Row>
                <TextInput label='Nombre hogar: *' id='nombreHogar' m={5} s={12}
                    {...formik.getFieldProps('nombre')} placeholder='Casa abuela'
                    children={formik.touched.nombre && formik.errors.nombre ? (<span className="helper-text red-text">{formik.errors.nombre}</span>) : null}
                />
                <TextInput label='# Contrato: *' id='numeroContrato' m={4} s={12}
                    {...formik.getFieldProps('numeroContrato')} placeholder='0000000'
                    children={formik.touched.numeroContrato && formik.errors.numeroContrato ? (<span className="helper-text red-text">{formik.errors.numeroContrato}</span>) : null}
                />
                <Col m={3}>
                    <p>¿Este es su hogar actual?</p>
                    <Col m={6}>
                        <p>
                            <label>
                                <input className="with-gap" name='hogarActual' id='hogarPrincipalSi' value='Si' type="radio"
                                    onChange={handledChanged} />
                                <span>Sí</span>
                            </label>
                        </p>
                    </Col>
                    <Col m={6}>
                        <p>
                            <label>
                                <input className="with-gap" name='hogarActual' id='hogarPrincipalNo' value='No' type="radio"
                                    onChange={handledChanged} />
                                <span>No</span>
                            </label>
                        </p>
                    </Col>
                    {errors.hogarActual && (<span className="helper-text red-text">{errors.hogarActual}</span>)}
                </Col>
                <Col m={6}>
                    <p>Tipo de vivienda: *</p>
                    <Col m={4} s={12}>
                        <Card>
                            <label>
                                <input name="tipoHogar" value='casa' type="radio"
                                    onChange={handledChanged} />
                                <span>Casa</span>
                            </label>
                        </Card>
                    </Col>
                    <Col m={4} s={12}>
                        <Card>
                            <label>
                                <input name="tipoHogar" value='apartamento' type="radio"
                                    onChange={handledChanged} />
                                <span>Apartamento</span>
                            </label>
                        </Card>
                    </Col>
                    <Col m={4} s={12}>
                        <Card>
                            <label>
                                <input name="tipoHogar" value='otro' type="radio"
                                    onChange={handledChanged} />
                                <span>Otro</span>
                            </label>
                        </Card>
                    </Col>
                    {errors.tipoHogar && (<span className="helper-text red-text">{errors.tipoHogar}</span>)}
                </Col>
                <Col m={6}>
                    <p>Estrato de la vivienda: *</p>
                    <Col m={4}>
                        <p>
                            <label>
                                <input className="with-gap" name='estrato' id='estrato1' value='1' type="radio"
                                    onChange={handledChanged} />
                                <span>1</span>
                            </label>
                        </p>
                    </Col>
                    <Col m={4}>
                        <p>
                            <label>
                                <input className="with-gap" name='estrato' id='estrato2' value='2' type="radio"
                                    onChange={handledChanged} />
                                <span>2</span>
                            </label>
                        </p>
                    </Col>
                    <Col m={4}>
                        <p>
                            <label>
                                <input className="with-gap" name='estrato' id='estrato3' value='3' type="radio"
                                    onChange={handledChanged} />
                                <span>3</span>
                            </label>
                        </p>
                    </Col>
                    <Col m={4}>
                        <p>
                            <label>
                                <input className="with-gap" name='estrato' id='estrato4' value='4' type="radio"
                                    onChange={handledChanged} />
                                <span>4</span>
                            </label>
                        </p>
                    </Col>
                    <Col m={4}>
                        <p>
                            <label>
                                <input className="with-gap" name='estrato' id='estrato5' value='5' type="radio"
                                    onChange={handledChanged} />
                                <span>5</span>
                            </label>
                        </p>
                    </Col>
                    <Col m={4}>
                        <p>
                            <label>
                                <input className="with-gap" name='estrato' id='estrato6' value='6' type="radio"
                                    onChange={handledChanged} />
                                <span>6</span>
                            </label>
                        </p>
                    </Col>
                    {errors.estrato && (<span className="helper-text red-text">{errors.estrato}</span>)}
                </Col>
                <Col m={12}>
                    <p>Servicios en el hogar:</p>
                    <Col m={2} s={12}>
                        <Checkbox
                            id="servicioAgua"
                            label="Agua"
                            value="Agua"
                            onChange={handledServicio}
                        />
                    </Col>
                    <Col m={2} s={12}>
                        <Checkbox
                            id="servicioEnergia"
                            label="Energía"
                            value="Energía"
                            onChange={handledServicio}
                        />
                    </Col>
                </Col>
            </Row>
            <Button type='submit' className='col s12' disabled={!formik.isValid} >
                Agregar hogar [+]
            </Button>
        </form>
    );
}