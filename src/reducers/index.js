import { combineReducers } from 'redux';
import userReducer from './user';
import { connectRouter } from 'connected-react-router';

export default history => combineReducers({
    router: connectRouter(history),
    user: userReducer
});
