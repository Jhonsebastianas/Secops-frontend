import { selector } from 'recoil';
import { Services } from '../../services/hogar.services';
import { HomeUser } from '../atoms/hogar.atom';
import LoginUtils from '../../../plugin-loginjwt-frontend/utils/login.utils';

export const getHogaresDeUsuario = selector({
  key: 'getHogaresDeUsuario',
  get: async ({ get }) => {
    let hogares = [];
    await Services.getHogaresByUsername(LoginUtils.getUsernameUser(), ({ data }) => {
      hogares = data;
    }, error => {
      // throw error;
    });
    return hogares;
  },
});