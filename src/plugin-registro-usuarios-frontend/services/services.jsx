import axios from 'axios';

export const Services = {
    newUser: (newUser, success, error) => {
        console.log(newUser);
        axios.post('http://localhost:3000/ha-backend/usuarios/registrarUsuarioNuevo', newUser)
            .then(success)
            .catch(error);
    }
}