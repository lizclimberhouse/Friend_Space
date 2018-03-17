import React, { Component } from 'react';
import { Container, Grid, Header, Card, Dropdown, Image, Divider, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import NavBar from './NavBar';
import { connect } from 'react-redux';
import PostForm from './PostForm';
import { setHeaders } from '../actions/headers';
import { getPosts } from '../actions/posts';

class Home extends Component {
  state = { posts: [] }

  render() {
    return (
      <div>
        <Header id="spacers" as='h1' textAlign='center'>Welcome to MySpace</Header>
        <Container>
          <Divider />
        </Container>
        <Container>
          <Link id="back_btn" to="/posts">
            Go to MySpace
          </Link>
        </Container>
      </div>
    )
  }
}

export default Home;
