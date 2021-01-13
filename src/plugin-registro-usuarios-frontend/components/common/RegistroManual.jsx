import React from 'react';
import { Button, Col, Modal, Row, Textarea } from 'react-materialize';

export function RegistroManual(props) {
    const { servicio } = props;

    const agregarServicio = () => {
        console.log(servicio);
    }

    return (
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
                        <Button modal="close" node="button" waves="green" onClick={agregarServicio}>Confirmar</Button>
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
                        <Textarea label="registro" placeholder="0_0_0_0_0" s={12} />
                    </Col>
                </Row>
            </Modal>
        </div>
    );
}