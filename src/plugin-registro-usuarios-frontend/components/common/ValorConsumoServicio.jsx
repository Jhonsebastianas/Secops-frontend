import React from 'react';
import { Container, Table } from "react-materialize";

export function ValorConsumoServicio() {

    return (

        <Container>
            <h5>Valor del Consumo</h5>
            <Table className="responsive-table">
                <tr>
                    <td>Servicio por m³</td>
                    <td>$ 2,843.36</td>
                </tr>
                <tr>
                    <td>Exceso por m³</td>
                    <td>$ 2,843.36</td>
                </tr>
                <tr>
                    <td>Cargo fijo</td>
                    <td>$ 6,550.69</td>
                </tr>
                <tr>
                    <td>Exceso</td>
                    <td>$ 2,843.36</td>
                </tr>
                <tr>
                    <td>Acueducto</td>
                    <td>$ 0</td>
                </tr>
                <tr>
                    <td>Alcantarillado</td>
                    <td>$ 0</td>
                </tr>
            </Table>
        </Container>

    );
}