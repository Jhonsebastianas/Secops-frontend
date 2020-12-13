import axios from 'axios';
import ConstantsList from '../../constants/Constants';

export const Services = {
    getHogaresByUsername: (username, success, error) => {
        const { API_ENDPOINT } = ConstantsList;
        axios.post(API_ENDPOINT + 'home/homes-user', {username: username})
            .then(success)
            .catch(error);
    },
    getHogarByNumeroContrato: (numeroContrato, success, error) => {
        const { API_ENDPOINT } = ConstantsList;
        axios.post(API_ENDPOINT + 'home/editar-hogar', {numeroContrato: numeroContrato})
            .then(success)
            .catch(error);
    },
}