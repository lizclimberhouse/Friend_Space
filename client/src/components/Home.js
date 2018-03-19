import React, { Component } from 'react';
import { Container, Comment, Grid, Header, Card, Dropdown, Image, Divider, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import NavBar from './NavBar';
import { connect } from 'react-redux';
import PostForm from './PostForm';
import { setHeaders } from '../actions/headers';
import { getPosts } from '../actions/posts';
import MyFriends from './MyFriends';
import axios from 'axios';

class Home extends Component {
  state = { posts: [], users: [] }

  // TODO make funciton to like users? and componentDidMount?

  componentDidMount() {
    axios.get('/api/my_friends')
      .then( res => {
        this.setState({ users: res.data })
        this.props.dispatch({ type: 'HEADERS', headers: res.headers })
      });
  }

  addFriend = (id) => {
    let { users } = this.state;
    axios.put(`/api/users/${id}`)
      .then( res => {
        this.setState({ users: users.filter( u => u.id !== id ) })
        this.props.dispatch({ type: 'HEADERS', headers: res.headers })
      })
  }
  
  render() {
    let { users } = this.state;
    return (
      <Container>
        <Header id="spacers" as='h1' textAlign='center'>Welcome to MySpace</Header>
        <Container>
          <Divider />
        </Container>
        <div id="home_page">
          <Container id="home_main">
            <div id="user_pic">User Picture</div>
            <h3>User Name</h3>
            <h4>User Quote</h4>
          </Container>
          <div id="left-margin">
            <Container id="home_side">
              <Link id="back_btn" to="/posts">See Posts</Link>
              <Link id="back_btn" to="/users">See Users</Link>
            </Container>
            <div id="home_main">   
              <Link to="/my_friends">My Friends</Link>
              <Container>
                { users.map( user =>
                  <Container key={user.id}>
                  <Comment.Group id="post_box" size='large'>
                    <Comment>
                      <Comment.Avatar as="a" src={user.picture} />
                      <Comment.Content>
                        <Comment.Author as="a">{user.name}</Comment.Author>
                        <Comment.Metadata>
                          <div>{user.city}</div>
                        </Comment.Metadata>
                        <Divider />
                        <Comment.Text>
                        <div>{user.email}</div>
                        </Comment.Text>
                        <Comment.Actions>
                          <Link id="view_post_link" to={`/users/${user.id}`}>
                            View Profile
                          </Link>
                        </Comment.Actions>
                      </Comment.Content>
                    </Comment>
                  </Comment.Group>
                  </Container>
                )}
              </Container>
            </div>
          </div>
        </div>
      </Container>
    )
  }
}

export default connect()(Home); //TODO do i need this connect here?
