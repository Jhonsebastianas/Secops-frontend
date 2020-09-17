export const validate = values => {
    const errors = {}
    if (!values.nombres) {
        errors.nombres = 'Este campo es obligatorio'
    }
    if (!values.apellidos) {
        errors.apellidos = 'Este campo es obligatorio'
    }
    if(!values.correo) {
        errors.correo = 'Este campo es obligatorio'
    }
    if(!values.clave) {
        errors.clave = 'Este campo es obligatorio'
    }
    return errors;
}

const validateFields = values => {
    const { maxL, minL, key } = values;
    const errors = {};
    const field = values[key];
    if(!field) {
        errors.key = 'Este campo es obligatorio'
        if(field.length <= maxL) {
            
        }
    }
    return errors;
}