import React from 'react';
import { connect } from 'react-redux';
import { addPost, updatePost } from '../actions/posts';
import { Form } from 'semantic-ui-react';

class PostForm extends React.Component {
  initialPostState = {
    title: '',
    body: '',
    image: '',
    author: '',
    date: '',
  }

  state = {...this.initialPostState}

  componentWillMount() {
    if (this.props.id)
      this.setState({ ...this.props })
  }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const post = {...this.state}
    const { closeForm, dispatch } = this.props
    const func = this.props.id ? updatePost : addPost
    dispatch(func(post))
    // debugger
    closeForm()
  }

  render() {
    const { title, body, image, author, date } = this.props
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Input
          name="title"
          required
          defaultValue={title}
          onChange={this.handleChange}
          label="Title"
        />
        <Form.Input
          name="author"
          defaultValue={author}
          onChange={this.handleChange}
          label="Author"
        />
        <Form.Input
          name="date"
          defaultValue={date}
          onChange={this.handleChange}
          label="Post Date"
        />
        <Form.Input
          name="body"
          defaultValue={body}
          onChange={this.handleChange}
          label="Body"
        />
        <Form.Input
          name="image"
          defaultValue={image}
          onChange={this.handleChange}
          label="Image"
        />
        <Form.Button>Save</Form.Button>
      </Form>
    )
  }
}

export default connect()(PostForm);