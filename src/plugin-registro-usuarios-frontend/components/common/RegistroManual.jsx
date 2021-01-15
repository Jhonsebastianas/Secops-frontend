import React from 'react';
import { Button, Col, Modal, Row, Textarea } from 'react-materialize';
import { useFormik } from 'formik';
import * as Yup from 'yup';

export function RegistroManual(props) {
    const { servicio } = props;

    const registrarConsumoSchema = Yup.object().shape({
        numeroContador: Yup.string().trim()
            .max(5, 'Máximo 5 caracteres')
            .required('Este campo es obligatorio'),
    });

    const registrarNuevoConsumo = (values) => {
        const { numeroContador } = values;
        console.log(numeroContador);
        console.log(servicio);
    }

    const formik = useFormik({
        initialValues: {
            numeroContador: '',
        },
        validationSchema: registrarConsumoSchema,
        onSubmit: registrarNuevoConsumo,
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <div>
                <Button
                    className="modal-trigger"
                    href="#modal1"
                    node="button"
                >
                    Agregar registro
            </Button>
                <Modal
                    actions={[
                        <div>
                            <Button flat modal="close" node="button">Cancelar</Button>
                            <Button type='submit' disabled={!formik.isValid} modal="close" node="button">Confirmar</Button>
                        </div>
                    ]}
                    bottomSheet={false}
                    fixedFooter={false}
                    header="Agregar registro"
                    id="modal1"
                    open={false}
                    options={{
                        dismissible: true,
                        endingTop: '10%',
                        inDuration: 250,
                        onCloseEnd: null,
                        onCloseStart: null,
                        onOpenEnd: null,
                        onOpenStart: null,
                        opacity: 0.5,
                        outDuration: 250,
                        preventScrolling: true,
                        startingTop: '4%'
                    }}
                >
                    <Row>
                        <Col s={12}>
                            Revisa tu contador de servicios públicos, apunta el número que aparece en el contador y escríbelo en el siguiente campo y así llevar tu histórico de consumo.
                    </Col>
                        <Col s={12}>
                            <Textarea label="Número del contador público:" placeholder="0_0_0_0_0" s={12}
                                {...formik.getFieldProps('numeroContador')}
                                children={formik.touched.numeroContador && formik.errors.numeroContador ? (<span className="helper-text red-text">{formik.errors.numeroContador}</span>) : null}
                            />
                        </Col>
                    </Row>
                </Modal>
            </div>
        </form>
    );
}