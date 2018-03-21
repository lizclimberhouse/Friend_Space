import axios from 'axios';
import { setHeaders } from './headers';

export const USERS = 'USERS';
export const UPDATE_USER = 'UPDATE_USER';

export const getUsers = () => {
  return (dispatch) => {
    axios.get('/api/users')
      .then( res => dispatch({ type: USERS, users: res.data, headers: res.headers  }) )
    }
}

export const editUser = (user) => {
  return (dispatch) => {
    axios.put(`/api/users/${user.id}`, { user } )
      .then( res => dispatch({ type: UPDATE_USER, user: res.data, headers: res.headers  }) )
  }
}