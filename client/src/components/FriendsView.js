import React from 'react';
import { Container, Grid, Header, Card, Dropdown, Image, Divider, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';

class FriendsView extends React.Component {
  state = { liked: false, user: [] }

  componentDidMount() {
    axios.get(`/api/users/${id}`)
    .then( res => {
      this.setState({ user: res.data })
      this.props.dispatch({ type: 'HEADERS', headers: res.headers })
    });
}

  render() {
    const { liked, user } = this.state;
    return (
      <Container>
        <Header id="spacers" as='h1' textAlign='center'>{user.name}</Header>
        <Container>
          <Divider />
        </Container>
        <div id="home_page">
          <Container id="home_main">
            <div id="user_pic">User Picture</div>
            <h4>{user.quote}</h4>
            <Image src={user.picture} />
          </Container>
          <Container id="home_main">
            <Link id="back_btn" to="/">
              Like This user
            </Link>
            {/* TODO add list of liked users here */}
          </Container>
        </div>
        
      </Container>
    )
  }
}

const mapStateToProps = (state, props) => {
  const user = state.users.find( u => u.id === parseInt(props.match.params.id )) 
  return { user };
}

export default connect(mapStateToProps)(FriendsView); //TODO do i need this connect here?
