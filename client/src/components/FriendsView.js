import React from 'react';
import { Container, Grid, Header, Card, Dropdown, Image, Divider, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';

class FriendsView extends React.Component {
  state = { liked: false}

  render() {
    const { liked } = this.state;
    const { friend = [] } = this.props;
    return (
      <Container>
        <Header id="spacers" as='h1' textAlign='center'>{friend.name}</Header>
        <Container>
          <Divider />
        </Container>
        <div id="home_page">
          <Container id="home_main">
            <div id="user_pic">User Picture</div>
            <h4>{friend.quote}</h4>
            <Image src={friend.picture} />
          </Container>
          <Container id="home_main">
            <Link id="back_btn" to="/">
              Like This Friend
            </Link>
            {/* TODO add list of liked friends here */}
          </Container>
        </div>
        
      </Container>
    )
  }
}

const mapToProps = (state, props) => {
  return { friend: state.friend }
}

export default connect(mapToProps)(FriendsView); //TODO do i need this connect here?
