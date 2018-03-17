import
{
  POSTS,
  ADD_POST,
  UPDATE_POST,
  DELETE_POST,
} from '../actions/posts'

const posts = (state = [], action ) => {
  switch(action.type) {
    case POSTS:
      return action.posts
    case ADD_POST:
      return [action.post, ...state]
    case UPDATE_POST:
    debugger
      return state.map( p => {
        if (p.id === action.post.id)
          return action.post
        return p
      })
    case DELETE_POST:
      return state.filter( p => p.id !== action.id)
    default:
      return state;
  }
}

export default posts;