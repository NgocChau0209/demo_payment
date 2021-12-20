import { combineReducers } from 'redux'
import { userReducer } from 'controller/redux/reducers/user';
import { cardReducer } from 'controller/redux/reducers/card';
import { layoutReducer } from 'controller/redux/reducers/layout';
import { transactionReducer } from 'controller/redux/reducers/transaction';

const rootReducer = combineReducers({
    layout: layoutReducer,
    card: cardReducer,
    user: userReducer,
    transaction: transactionReducer
})

export default rootReducer;