import Constants from '../../constants/Constants';

export default class LoginUtils {}

LoginUtils.getUsernameUser = getUsernameUser;



function getUsernameUser () {
    const { USER_NAME } = Constants;
    const { usuario } = JSON.parse(localStorage.getItem(USER_NAME));
    return usuario.username;
}