import React from 'react';
import { Card, Image, Grid, Divider, Icon } from 'semantic-ui-react';
import { connect } from 'react-redux';
import axios from 'axios';

class Friends extends React.Component {
  state = { friends: [] }

  componentDidMount() {
    axios.get('/api/friends')
      .then( res => {
        this.setState({ friends: res.data })
        this.props.dispatch({ type: 'HEADERS', headers: res.headers })
      });
  }

  render() {
    let { friends } = this.state;
    return (
      <Card.Group itemsPerRow={4}>
        { friends.map( friend =>
            <Card key={friend.id}>
              <Card.Content>
                <Image src={friend.picture} />
                <Divider />
                <Card.Header>
                  {friend.name}
                </Card.Header>
                <Card.Meta>
                  {friend.city}
                </Card.Meta>
                <Card.Description>
                  {friend.quote}
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                <a>
                <Icon name='user' />
                  liked?
                  {/* TODO add link here to view and like or dis-like? Maybe a checkbox instead of user */}
                </a>
              </Card.Content>
            </Card>
          )
        }
      </Card.Group>
    )
  }
}

export default connect()(Friends)