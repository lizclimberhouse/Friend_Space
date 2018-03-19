import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import Users from './Users';
import UsersView from './UsersView';
import { getUsers } from '../actions/users';
import { Loader, Segment, Dimmer } from 'semantic-ui-react';

class FetchUsers extends React.Component {

  componentDidMount() {
    this.props.dispatch(getUsers())
  }

  render() {
      return (
        <div>
          <Route exact path="/users" component={Users} />
          <Route exact path="/users/:id" component={UsersView} />
        </div>
      )
  }
}

export default connect()(FetchUsers);