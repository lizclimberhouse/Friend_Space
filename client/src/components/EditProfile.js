import React from 'react';
import { Card, Image, Grid, Divider } from 'semantic-ui-react';
import { connect } from 'react-redux';
import axios from 'axios';
import { editUser } from '../actions/users';
import { Form } from 'semantic-ui-react';

class EditProfile extends React.Component {
  
  state = {
    initialUserState: {
    name: '',
    quote: '',
    picture: '',
    city: '',
  },
}

  componentWillMount() {
    const { user: { name, quote, picture, city }} = this.props
    this.setState({ initialUserState: { name, quote, picture, city } })
  }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({ 
      initialUserState: {
        ...this.state.initialUserState,
        [name]: value
      } 
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const { initialUserState: { name, quote, picture, city }} = this.state;
    const { closeForm, user, dispatch } = this.props
    dispatch(editUser(user.id, { name, quote, picture, city }))
    closeForm()
  }

  render() {
    const { initialUserState: { name, quote, picture, city }} = this.state
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

const mapStateToProps = (state, props) => {
  return { user: state.user}
}

export default connect(mapStateToProps)(EditProfile)