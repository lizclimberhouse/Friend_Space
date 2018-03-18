import axios from 'axios';
import { setHeaders } from './headers';

export const FRIENDS = 'FRIENDS';

export const getFriends = () => {
  return (dispatch) => {
    axios.get('/api/friends')
      .then( res => dispatch({ type: FRIENDS, friends: res.data, headers: res.headers  }) )
    }
}