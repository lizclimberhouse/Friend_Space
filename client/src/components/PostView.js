import React from 'react';
import { Divider, Header, Image, Container, Table, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PostForm from './PostForm';
import { deletePost } from '../actions/posts';

class PostView extends React.Component {
  state = { showPostForm: false }

  togglePostForm = () => {
    this.setState( state => {
      return { showPostForm: !state.showPostForm }
    })
  }

  removePost = (post) => {
    // debugger 
    const { post: {id}, dispatch, history } = this.props
    dispatch(deletePost(id))
    // debugger
    history.push('/posts')
  }

  render() {
    const { showPostForm } = this.state;
    const { post = [] } = this.props;
    return (
      <Container>
        <Link to="/posts">View All Posts</Link>
        <Button onClick={this.togglePostForm}>
          { showPostForm ? 'Cancel' : 'Edit' }
        </Button>
        <Button color="red" onClick={this.removePost}>
          Delete
        </Button>
        { showPostForm ?
          <PostForm {...post} closeForm={this.togglePostForm} />
          :
          <div>
            <Header as="h3" textAlign="center">{post.title}</Header>
            <Image src={post.image} />
            <Table definition>
            <Table.Header>
                <Table.Row>
                  <Table.HeaderCell />
                  <Table.HeaderCell />
                </Table.Row>
              </Table.Header>

              <Table.Body>
                <Table.Row>
                  <Table.Cell>Body</Table.Cell>
                  <Table.Cell>{post.body}</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>Author</Table.Cell>
                  <Table.Cell>{post.author}</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>Post Date</Table.Cell>
                  <Table.Cell>{post.date}</Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table>
          </div>
        }
      </Container>
    )
  }
}

const mapStateToProps = (state, props) => {
  return { post: state.posts.find( p => p.id === parseInt(props.match.params.id )) }
}

export default connect(mapStateToProps)(PostView);
