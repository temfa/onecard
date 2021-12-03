import { ADD } from '../types/rechargeTypes'

export const add = (data) => dispatch => {
    return {
        type: ADD,
        payload: { data }
    }
}
