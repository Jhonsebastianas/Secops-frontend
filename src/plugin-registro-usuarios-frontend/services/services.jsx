import axios from 'axios';
import ConstantsList from '../../Constants';

export const Services = {
    newUser: (newUser, success, error) => {
        const { API_ENDPOINT } = ConstantsList;
        axios.post(API_ENDPOINT + 'usuarios/registrarUsuarioNuevo', newUser)
            .then(success)
            .catch(error);
    }
}