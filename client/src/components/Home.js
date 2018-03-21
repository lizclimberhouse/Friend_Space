import React, { Component } from 'react';
import { Container, Comment, Grid, Header, Card, Dropdown, Image, Divider, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import NavBar from './NavBar';
import { connect } from 'react-redux';
import PostForm from './PostForm';
import { setHeaders } from '../actions/headers';
import { getPosts } from '../actions/posts';
import MyFriends from './MyFriends';
import EditProfile from './EditProfile';
import axios from 'axios';

class Home extends Component {
  state = { posts: [], users: [], showProfileForm: false }

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

  toggleProfileForm = () => {
    this.setState( state => {
      return { showProfileForm: !state.showProfileForm }
    })
  }
  
  render() {
    let { users } = this.state;
    let { currentUser } = this.props;
    const { showProfileForm } = this.state;
    return (
      <Container>
        <Header id="spacers" as='h1' textAlign='center'>Welcome to MySpace</Header>
        <Container>
          <Divider />
        </Container>
        <div id="home_page">
          <Container id="home_main">
            <div id="user_pic">{this.props.currentUser.picture}</div>
            <Button color="blue" onClick={this.toggleProfileForm}>
              { showProfileForm ? 'Cancel' : 'Edit' }
            </Button>
          </Container>
        </div>
        <div>
          <h1>{currentUser.name}</h1>
          <p>email: {currentUser.email}</p>
          <h3>Location: {currentUser.city}</h3>
          <h4>Quote: {currentUser.quote}</h4>
        </div>
          { showProfileForm ? 
            <EditProfile {...currentUser} closeForm={this.toggleProfileForm} />
            :
            <div>
                <Container id="home_side">
                  <Link id="back_btn" to="/posts">See Posts</Link>
                  <Link id="back_btn" to="/users">See Users</Link>
                </Container>
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
          }
      </Container>       
    )
  }
}

//store-
const mapStateToProps = (state, props) => { 
  return {
    currentUser: state.user
  }
}

export default connect(mapStateToProps)(Home); //TODO do i need this connect here?
