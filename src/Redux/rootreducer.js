import {combineReducers} from 'redux';
import User from './User/user';

const rootreducer =combineReducers({
    User:User
})

export default rootreducer;