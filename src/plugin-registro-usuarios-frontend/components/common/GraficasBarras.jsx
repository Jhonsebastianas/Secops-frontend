import React from 'react';
import { BarChart, Bar, ResponsiveContainer, XAxis, YAxis, CartesianGrid, Tooltip, Legend, } from "recharts";
import { DatePicker, Container, Button, Icon } from "react-materialize";
import '../../../styles/styleGraficasBarras.css';

const data = [
    { meses: "Semana 1", Enero: 4000, amt: 4000 },
    { meses: "Semana 2", Enero: 3000, amt: 3000 },
    { meses: "Semana 3", Enero: 2000, amt: 2000 },
    { meses: "Semana 4", Enero: 2780, amt: 2780 },
];

export function GraficasBarras() {

    return (
        <Container style={{ textAlign: 'center !important' }}>
            <h5>Estadísticas de Consumo</h5>                         
            <ResponsiveContainer width="110%" height={300}>
                <BarChart
                    data={data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="meses" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="Enero" fill="#51d1f6" />
                </BarChart>
            </ResponsiveContainer>
            <DatePicker
                label="Desde"
                id="DatePickerInicio"
                options={{
                    autoClose: false,
                    container: null,
                    defaultDate: null,
                    disableDayFn: null,
                    disableWeekends: false,
                    events: [],
                    firstDay: 0,
                    format: "dd/mm/yyyy",
                    i18n: {
                        cancel: "Cancel",
                        clear: "Clear",
                        done: "Ok",
                        months: [
                            "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
                            "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Deciembre"
                        ],
                        monthsShort: [
                            "Ene", "Feb", "Mar", "Abr", "May", "Jun",
                            "Jul", "Ag", "Sep", "Oct", "Nov", "Dec"
                        ],
                        nextMonth: "›",
                        previousMonth: "‹",
                        weekdays: [
                            "Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"
                        ],
                        weekdaysAbbrev: ["D", "L", "M", "M", "J", "V", "S"],
                        weekdaysShort: [
                            "Dom", "Lun", "Mart", "Miérc", "Jue", "Vie", "Sáb"
                        ],
                    },
                    isRTL: false,
                    maxDate: null,
                    minDate: null,
                    onClose: null,
                    onDraw: null,
                    onOpen: null,
                    onSelect: null,
                    parse: null,
                    setDefaultDate: false,
                    showClearBtn: false,
                    showDaysInNextAndPreviousMonths: false,
                    showMonthAfterYear: false,
                    yearRange: 10,
                }}
            />
            <DatePicker style={{margin: '0px !important'}}
                label="Hasta"
                id="DatePickerFinal"
                options={{
                    autoClose: false,
                    container: null,
                    defaultDate: null,
                    disableDayFn: null,
                    disableWeekends: false,
                    events: [],
                    firstDay: 0,
                    format: "dd/mm/yyyy",
                    i18n: {
                        cancel: "Cancel",
                        clear: "Clear",
                        done: "Ok",
                        months: [
                            "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
                            "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Deciembre"
                        ],
                        monthsShort: [
                            "Ene", "Feb", "Mar", "Abr", "May", "Jun",
                            "Jul", "Ag", "Sep", "Oct", "Nov", "Dec"
                        ],
                        nextMonth: "›",
                        previousMonth: "‹",
                        weekdays: [
                            "Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"
                        ],
                        weekdaysAbbrev: ["D", "L", "M", "M", "J", "V", "S"],
                        weekdaysShort: [
                            "Dom", "Lun", "Mart", "Miérc", "Jue", "Vie", "Sáb"
                        ],
                    },
                    isRTL: false,
                    maxDate: null,
                    minDate: null,
                    onClose: null,
                    onDraw: null,
                    onOpen: null,
                    onSelect: null,
                    parse: null,
                    setDefaultDate: false,
                    showClearBtn: false,
                    showDaysInNextAndPreviousMonths: false,
                    showMonthAfterYear: false,
                    yearRange: 10,
                }}
            />
            
                <Button style={{marginTop:'2%'}} type="submit" modal="close" node="button">Buscar
                    <Icon right>search</Icon>
                </Button>
            
        </Container>
    );
}