import React from 'react';
import { Card, Image, Grid, Divider } from 'semantic-ui-react';
import { connect } from 'react-redux';
import axios from 'axios';

class MyFriends extends React.Component {
  state = { users: [] }

  componentDidMount() {
    axios.get('/api/my_friends')
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
              </Card.Content>
            </Card>
          )
        }
      </Card.Group>
    )
  }
}

export default connect()(MyFriends)