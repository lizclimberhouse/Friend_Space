import React from 'react';
import { Card, Image, Grid, Divider } from 'semantic-ui-react';
import { connect } from 'react-redux';
import axios from 'axios';
import { editUser } from '../actions/users';
import { Form } from 'semantic-ui-react';

class EditProfile extends React.Component {
  initialUserState = {
    name: '',
    quote: '',
    picture: '',
    city: '',
  }

  state = {...this.initialUserState}

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
    const currentUser = {...this.state}
    debugger 
    const { closeForm, dispatch } = this.props
    dispatch(editUser(currentUser))
    closeForm()
  }

  render() {
    const { name, quote, picture, city } = this.props
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Input
          name="name"
          required
          defaultValue={name}
          onChange={this.handleChange}
          label="Name"
        />
        <Form.Input
          name="quote"
          defaultValue={quote}
          onChange={this.handleChange}
          label="Quote"
        />
        <Form.Input
          name="picture"
          defaultValue={picture}
          onChange={this.handleChange}
          label="Picture"
        />
        <Form.Input
          name="city"
          defaultValue={city}
          onChange={this.handleChange}
          label="City"
        />
        <Form.Button color="green" >Save</Form.Button>
      </Form>
    )
  }
}


export default connect()(EditProfile)