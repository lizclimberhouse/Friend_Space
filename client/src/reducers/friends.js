import
{
  FRIENDS,
} from '../actions/friends'

const friends = (state = [], action ) => {
  switch(action.type) {
    case FRIENDS:
      return action.friends
    default:
      return state;
  }
}

export default friends;