import React, { Component } from 'react';
import { Container, Comment, Grid, Header, Card, Dropdown, Image, Divider, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import NavBar from './NavBar';
import { connect } from 'react-redux';
import PostForm from './PostForm';
import { setHeaders } from '../actions/headers';
import { getPosts } from '../actions/posts';
import axios from 'axios';

class Home extends Component {
  state = { posts: [], users: [] }

  // TODO make funciton to like friends? and componentDidMount?

  componentDidMount() {
    axios.get('/api/users')
    .then( res => {
      this.setState({ users: res.data }) 
    })
    }

  render() {
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
          <Container id="home_main">
            <Link id="back_btn" to="/posts">
              See Posts
            </Link>
            <Link id="back_btn" to="/friends">See Friends</Link>
            <Container>              
              { this.state.users.map( user =>
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
                        <Link id="view_post_link" to={`/friends/${user.id}`}>
                          View Profile
                        </Link>
                      </Comment.Actions>
                    </Comment.Content>
                  </Comment>
                </Comment.Group>
                </Container>
              )}


            </Container>
          </Container>
        </div>
        
      </Container>
    )
  }
}

export default connect()(Home); //TODO do i need this connect here?
