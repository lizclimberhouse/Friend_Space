import React, { Component } from 'react';
import { Container, Grid, Header, Card, Dropdown, Image, Divider, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import NavBar from './NavBar';
import { connect } from 'react-redux';
import PostForm from './PostForm';
import { setHeaders } from '../actions/headers';
import { getPosts } from '../actions/posts';
import axios from 'axios';

class Home extends Component {
  state = { posts: [], friends: [] }

  // TODO make funciton to like friends? and componentDidMount?

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
            {/* TODO add list of liked friends here */}
          </Container>
        </div>
        
      </Container>
    )
  }
}

export default connect()(Home); //TODO do i need this connect here?
