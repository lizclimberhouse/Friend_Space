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

export const editUser = (id, user) => {
  return (dispatch) => {
    //let data = new FormData()
    let url = `/api/edit_profile`
    axios.put(url, { user })
      .then( res => {
        dispatch({
          type: UPDATE_USER,
          user: res.data,
          headers: res.headers
        })
      })
  }
}