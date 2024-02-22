import {atom} from 'recoil';
import {IUser} from "../types/api.interfaces";

export const userAtom = atom<IUser | null>({
    key: 'user',
    default: null
});

export const selectedTableOneAtom = atom<number[]>({
    key: 'selectedTableOne',
    default: [0, 0, 0, 0, 0, 0]
});
export const selectedTableTwoAtom = atom<number[]>({
    key: 'selectedTableTwo',
    default: [0, 0, 0, 0, 0, 0, 0]
});