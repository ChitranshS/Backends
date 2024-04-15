import {atom, selector} from 'recoil'
import axios from 'axios'

// Older way of using default values
// export const networkAtom = atom({
//     key:'1',
//     default:{
//         network : 0,
//         jobs:0,
//         messaging:0,
//         notifications:0
//     }
// })

// Using async calls inside the default value
export const networkAtom = atom({
    key:'1',
    default:selector({
        key:'1/selector',
        get : async ()=>{
            const res = await axios.get("https://sum-server.100xdevs.com/notifications")
            return res.data
            
        }
    })
})

export const totalNotificationSelector = selector({
    key:'2',
    get :({get})=>{
        const notificationAll = get(networkAtom)
        return notificationAll.jobs+notificationAll.messaging+notificationAll.network+notificationAll.notifications
    }
})