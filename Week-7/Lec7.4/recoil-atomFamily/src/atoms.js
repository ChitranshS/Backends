import { atomFamily, selectorFamily } from 'recoil';
import axios from 'axios';

export const todoAtomFam = atomFamily({
    key: '1',
    default: selectorFamily({
        key: '1/selectorFam',
        get: (id) => async () => {
            const res = await axios.get(`https://sum-server.100xdevs.com/todo?id=${id}`);
            return res.data.todo;
        }
    })
});
