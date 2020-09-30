import ConstantsList from '../../constants/Constants';

export default function AuthHeader() {
    const { TOKEN_NAME, USER_NAME } = ConstantsList
    const user = JSON.parse(localStorage.getItem(USER_NAME));
    if (user && user[TOKEN_NAME]) {
        // for Node.js Express back-end
        return { 'x-access-token': user[TOKEN_NAME] };
    } else {
        return {};
    }
}