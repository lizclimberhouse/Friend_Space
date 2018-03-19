import axios from 'axios';
import { setHeaders } from './headers';

export const USERS = 'USERS';

export const getUsers = () => {
  return (dispatch) => {
    axios.get('/api/users')
      .then( res => dispatch({ type: USERS, users: res.data, headers: res.headers  }) )
    }
}