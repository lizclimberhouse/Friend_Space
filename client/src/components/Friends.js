import React from 'react';
import { Card, Image, Grid, Divider, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';

class Friends extends React.Component {
  state = { users: [] }

  componentDidMount() {
      axios.get('/api/users')
      .then( res => {
        this.setState({ users: res.data })
        this.props.dispatch({ type: 'HEADERS', headers: res.headers })
      });
  }

  render() {
    let { users } = this.state;
    return (
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
                <Link to={`/friends/${user.id}`}>
                <Icon name='user' />
                  View Profile
                </Link>
              </Card.Content>
            </Card>
          )
        }
      </Card.Group>
    )
  }
}


const mapStateToProps = (state) => {
  const users = state.users;
  return { users }
}

export default connect(mapStateToProps)(Friends);