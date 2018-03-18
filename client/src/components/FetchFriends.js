import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import Friends from './Friends';
import FriendsView from './FriendsView';
import { getFriends } from '../actions/friends';
import { Loader, Segment, Dimmer } from 'semantic-ui-react';

class FetchFriends extends React.Component {

  componentDidMount() {
    this.props.dispatch(getFriends())
  }

  render() {
      return (
        <div>
          <Route exact path="/friends" component={Friends} />
          <Route exact path="/friends/:id" component={FriendsView} />
        </div>
      )
  }
}

export default connect()(FetchFriends);