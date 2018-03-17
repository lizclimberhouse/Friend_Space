import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getPosts } from '../actions/posts';
import { Container, Grid, Header, Card, Image, Button, Dropdown, Divider, Comment, Icon } from 'semantic-ui-react';
import PostForm from './PostForm';
import '../css.css';

class Posts extends React.Component {

  state = { author: '', showPostForm: false }

  togglePostForm = () => {
    this.setState( state => {
      return { showPostForm: !state.showPostForm }
    })
  }

  authorOptions = () => {
    return this.props.authors.map( (a,i) => {return { key: i, text: a, value: a } })
  }

  posts = () => {    
    const { posts } = this.props;
    const { author } = this.state;
    let visible = posts;
    if (author)
      visible = posts.filter( p => p.author === author )

    return visible.map( post =>
      <Container>
      <Comment.Group id="post_box" size='large' key={post.id}>
        <Comment>
          <Comment.Avatar as="a" src={post.image} />
          <Comment.Content>
            <Comment.Author as="a">{post.title}</Comment.Author>
            
            <Comment.Metadata>
              <div>{post.date}</div>
            </Comment.Metadata>
            <Divider />
            <Comment.Author as="a">
            <div>Written by: {post.author}</div>
            </Comment.Author>
            {/* <Comment.Metadata>
              <div>{post.author}</div>
            </Comment.Metadata> */}
            <Comment.Text>
              {post.body}
            </Comment.Text>
            <Comment.Actions>
              <Link to={`/posts/${post.id}`}>
                View Post
              </Link>
            </Comment.Actions>
          </Comment.Content>
        </Comment>
      </Comment.Group>
      </Container>

      // <Card key={post.id}>
      //   <Image src={post.image} />
      //   <Card.Content>
      //     <Card.Header>
      //       {post.title}
      //     </Card.Header>
      //     <Card.Meta>
      //       <span>
      //         {post.author}
      //         <br />
      //         {post.date}
      //       </span>
      //     </Card.Meta>
      //     <Card.Description>
      //       {post.body}
      //     </Card.Description>
      //   </Card.Content>
      //   <Card.Content extra>
      //     <Link to={`/posts/${post.id}`}>
      //       View Post
      //     </Link>
      //   </Card.Content>
      // </Card>
    )
  }


  render() {
    const { showPostForm, author }  = this.state;
    return (

      <Container>
        <Header id="spacers" as="h3" textAlign="center">Posts</Header>
        <Button id="btn_space" onClick={this.togglePostForm}>
          { showPostForm ? 'Hide Form' : 'Show Form' }
        </Button>
        { showPostForm ?
          <PostForm closeForm={this.togglePostForm} />
          :
          <div>
            <Dropdown
              placeholder="Filter by author"
              fluid
              selection
              options={this.authorOptions()}
              onChange={ (e, data) => this.setState({ author: data.value }) }
              value={author}
            />
            { author && <Button fluid basic onClick={ () => this.setState({ author: '' }) }>Clear Author Filter: {author}</Button>}
            <Divider />
            <Card.Group itemsPerRow={1}>
              { this.posts() }
            </Card.Group>
          </div>
        }
        </Container>
      )
    }
  }

  const mapStateToProps = (state) => {
    const posts = state.posts;
    const authors = [...new Set(posts.map( p => p.author ))]
    return { posts, authors }
  }

export default connect(mapStateToProps)(Posts);