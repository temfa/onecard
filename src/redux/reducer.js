import { combineReducers } from 'redux'
import rechargeReducer from './reducers/recharge'

export default combineReducers({
    recharge: rechargeReducer
})
