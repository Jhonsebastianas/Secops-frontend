import { selector } from 'recoil';
import { counterState } from '../atoms/atomEjemplo';


export const incrementSelector = selector({
    key: 'incrementSelector',
    get: ({ get }) => {
        const count = get(counterState);
        return count + 1;
    }
});