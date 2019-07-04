import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { userLogin, userSignUp } from '../actions';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: '',
    };
  }

  onInputChange = event =>
    this.setState({ [event.target.name]: event.target.value });

  userLogin = event => {
    event.preventDefault();
    this.props.userLogin(this.state.user).then(() => {
      this.props.history.push('/todo');
    });
  };

  userSignUp = () => {
    if (this.state.user.length > 0) {
      this.props.userSignUp(this.state.user).then(() => {
        this.props.history.push('/todo');
      });
    }
  };

  render() {
    if (localStorage.getItem('user')) {
      return <Redirect to='/todo' />;
    }
    return (
      <div className='login-container'>
        <form className='md-form' onSubmit={this.userLogin}>
          <div className='login'>
            <input
              type='text'
              name='user'
              value={this.state.user}
              onChange={this.onInputChange}
              id='exampleForm2'
              className='form-control white-text username-input'
              autoComplete='off'
              placeholder='Username'
              maxLength='15'
              required
            />
            <button className='btn peach-gradient' type='submit'>
              Login
            </button>
          </div>
          <div className='signup'>
            <button
              className='btn peach-gradient signup-btn'
              onClick={() => this.userSignUp()}>
              Sign Up
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default connect(
  null,
  { userLogin, userSignUp },
)(Login);
