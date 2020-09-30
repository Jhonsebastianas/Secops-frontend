import axios from 'axios';
import ConstantsList from '../../constants/Constants';

export const Services = {
    login: (user, success, error) => {
        const { API_ENDPOINT } = ConstantsList;
        axios.post(API_ENDPOINT + 'login/login-sencillo', user)
            .then(success)
            .catch(error);
    },
    logout: () => {
        const { TOKEN_NAME } = ConstantsList;
        localStorage.removeItem(TOKEN_NAME);
    },
    getCurrentUser: () => {
        return JSON.parse(localStorage.getItem('user'));;
    }
}