import
{
  UPDATE_USER,
} from '../actions/users'

const user = (state = {}, action) => {
  switch (action.type) {
    case 'LOGIN':
      return action.user;
    case UPDATE_USER:
      return action.user;  
    case 'LOGOUT':
      return {};
    default:
      return state;
  }
};

export default user;
