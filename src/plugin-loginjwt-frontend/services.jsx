import axios from 'axios';
import ConstantsList from '../Constants';

export const Services = {
    loginUser: (user, success, error) => {
        const { API_ENDPOINT } = ConstantsList;
        axios.post(API_ENDPOINT + 'login/login-sencillo', user)
            .then(success)
            .catch(error);
    }
}