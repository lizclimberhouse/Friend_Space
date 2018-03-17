import axios from 'axios';
import { setHeaders } from './headers';

export const POSTS = 'POSTS';
export const ADD_POST = 'ADD_POST';
export const UPDATE_POST = 'UPDATE_POST';
export const DELETE_POST = 'DELETE_POST';

export const getPosts = () => {
  return (dispatch) => {
    axios.get('/api/posts')
      .then( res => dispatch({ type: POSTS, posts: res.data, headers: res.headers  }) )
    }
}

export const addPost = (post) => {
  return (dispatch) => {
    axios.post('/api/posts', { post } )
      .then( res => dispatch({ type: ADD_POST, post: res.data, headers: res.headers  }) )
  }
}

export const updatePost = (post) => {
  return (dispatch) => {
    axios.put(`/api/posts/${post.id}`, { post } )
      .then( res => dispatch({ type: UPDATE_POST, post: res.data, headers: res.headers  }) )
  }
}

export const deletePost = (id) => {
  return (dispatch) => {
    axios.delete(`/api/posts/${id}`)
      .then( res => dispatch({ type: DELETE_POST, id, headers: res.headers  }) )
  }
} 