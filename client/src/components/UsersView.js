import React from 'react';
import { Container, Grid, Header, Card, Dropdown, Image, Divider, Button, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';

class UsersView extends React.Component {
  state = { user: [] }

  componentDidMount() {
    axios.get(`/api/users/${this.props.match.params.id}`)
    .then( res => {
      this.setState({ user: res.data, type: 'HEADERS', headers: res.headers })
    });
  }

  addFriend = (id) => {
    let { users } = this.state;
    axios.put(`/api/users/${id}`)
  }

  render() {
    let { liked, user } = this.state;
    return (
      <Container>
        <Header id="spacers" as='h1' textAlign='center'>Profile</Header>
        <Container>
          <Divider />
        </Container>
        <div id="home_page">
          <Container id="home_main">
            <Image id="user_pic" src={user.picture} />
          </Container>
          <Container id="home_main">
            <h1>{user.name}</h1>
            <p>email: {user.email}</p>
            <h3>Location: {user.city}</h3>
            <h4>Quote: {user.quote}</h4>
            <a key={user.id} onClick={ () => this.addFriend(user.id)}><Icon name='heart' />Add Friend</a>
          </Container>
        </div>
        
      </Container>
    )
  }
}

const mapStateToProps = (state, props) => {
  return { user: state.user }
}

export default connect(mapStateToProps)(UsersView);
