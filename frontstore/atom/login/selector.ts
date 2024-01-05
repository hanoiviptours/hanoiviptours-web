import { atom, selector, selectorFamily } from 'recoil';
import { loginState } from './state';
import axios from 'axios';
import validateLoginSchema from '../../validate/modules/login';
import { getValidateError } from '../../validate/helpers';

export const loginSelector = selectorFamily({
  key: 'loginSelector',
  get:
    ({ url, data }: any) =>
    async () => {
      try {
        const response = await axios.post(url, data);
        return await response.data;
      } catch (errors) {
        const loginErrors = getValidateError(errors);
        return loginErrors;
      }
    },
});
