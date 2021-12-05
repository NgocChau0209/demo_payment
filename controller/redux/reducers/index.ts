import { userReducer } from './user';
import { combineReducers } from 'redux'
import { layoutReducer } from './layout';
import { cardReducer } from './card';
const rootReducer = combineReducers({
    layout: layoutReducer,
    card: cardReducer,
    user: userReducer
})

export default rootReducer;