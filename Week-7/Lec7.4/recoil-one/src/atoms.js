import { atom , selector} from 'recoil'
export const networkAtom = atom({
    key:"1",
    default:102
})
export const notifAtom = atom({
    key:"2",
    default:12
})
export const mssgAtom = atom({
    key:"3",
    default:22
})
export const jobAtom = atom({
    key:"4",
    default:0
})
export const totalValueSelector = selector({
    key:"5",
    get : ({get})=>{
        const networkAtomC = get(networkAtom)
        const jobAtomC = get(jobAtom)
        const mssgAtomC = get(mssgAtom)
        const notifAtomC = get(notifAtom)
        return (networkAtomC+jobAtomC+mssgAtomC+notifAtomC)
    }
})
