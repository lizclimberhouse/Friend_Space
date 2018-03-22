import
{
  USERS,
} from '../actions/users'

const users = (state = {}, action ) => {
  switch(action.type) {
    case USERS:
      return action.users
    default:
      return state;
  }
}

export default users;