import React from 'react';
import { Card, Image, Grid, Divider, Icon, Container, Header, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';

class Users extends React.Component {
  state = { users: [], liked_friends: [] }

  componentDidMount() {
      axios.get('/api/users')
      .then( res => this.setState({ users: res.data }) )
  }

  addFriend = (id) => {
    let { users } = this.state;
    axios.put(`/api/users/${id}`)
      .then( () => this.setState({ users: users.filter( u => u.id !== id ) }) )
  }

  render() {
    let { users } = this.state;
    return (
      <Container>
        <Header id="spacers" as='h1' textAlign='center'>Make Some Friends!</Header>
        <Container>
          <Divider />
        </Container>
        <Card.Group itemsPerRow={4}>
          { users.map( user =>
              <Card key={user.id}>
                <Card.Content>
                  <Image src={user.picture} />
                  <Divider />
                  <Card.Header>
                    {user.name}
                  </Card.Header>
                  <Card.Meta>
                    {user.city}
                  </Card.Meta>
                  <Card.Description>
                    {user.quote}
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <Link to={`/users/${user.id}`}><Icon name='user' />View Profile </Link>
                  <a key={user.id} onClick={ () => this.addFriend(user.id)}><Icon name='heart' />Add Friend</a>
                </Card.Content>
              </Card>
            )
          }
        </Card.Group>
      </Container>
    )
  }
}


const mapStateToProps = (state) => {
  const users = state.users;
  return { users }
}

export default connect(mapStateToProps)(Users);