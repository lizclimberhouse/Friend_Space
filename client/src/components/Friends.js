import React from 'react';
import { Card, Image, Grid, Divider, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
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
                <Link to={`/friends/${friend.id}`}>
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
  const friends = state.friends;
  return { friends }
}

export default connect(mapStateToProps)(Friends);