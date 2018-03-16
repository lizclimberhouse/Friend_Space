import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import Posts from './Posts';
import PostView from './PostView';
import { getPosts } from '../actions/posts';
import { Loader, Segment, Dimmer } from 'semantic-ui-react';

class FetchPosts extends React.Component {
  // state = { loaded: true }

  componentDidMount() {
    this.props.dispatch(getPosts(this.setLoaded))
  }

  // setLoaded = () => {
  //   this.setState({ loaded: true });
  // }

  render() {
    // const { loaded } = this.state;
    // if (loaded) {
      return (
        <div>
          <Route exact path="/posts" component={Posts} />
          <Route exact path="/posts/:id" component={PostView} />
        </div>
      )
    // } else {
    //   return (
    //     <Segment>
    //       <Dimmer active>
    //         <Loader />
    //       </Dimmer>
    //     </Segment>
    //   )
    // }
  }
}

export default connect()(FetchPosts);