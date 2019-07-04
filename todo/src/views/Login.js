import React from 'react';
import { connect } from 'react-redux';
import { userLogin } from '../actions';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: '',
    };
  }

  componentDidMount() {}

  onInputChange = event =>
    this.setState({ [event.target.name]: event.target.value });

  userLogin = event => {
    event.preventDefault();
    this.props.userLogin(this.state.user).then(() => {
      this.props.history.push('/todo');
    });
  };

  render() {
    return (
      <div className='form-container'>
        <form className='md-form' onSubmit={this.userLogin}>
          <input
            type='text'
            name='user'
            value={this.state.user}
            onChange={this.onInputChange}
            id='exampleForm2'
            className='form-control white-text'
            autoComplete='off'
          />
          <button className='btn peach-gradient' type='submit'>
            Login
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({});

export default connect(
  mapStateToProps,
  { userLogin },
)(Login);
