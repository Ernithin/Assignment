import { LIST_DATA } from "./action"
const initialState = {
    listData: []
}

export default function Reducer(state = initialState, action) {
    // The reducer normally looks at the action type field to decide what happens
    const { type, payload } = action
    switch (type) {
        case LIST_DATA: {
            console.log(payload,'hiiii');
            return {
                ...state,
                listData: payload
            }
        }
        default:
            return state
    }
}