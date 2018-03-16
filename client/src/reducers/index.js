import { combineReducers } from 'redux';
import user from './user';
import posts from './posts';
import flash from './flash';


const rootReducer = combineReducers({
  user,
  posts,
  flash,
});

export default rootReducer;
