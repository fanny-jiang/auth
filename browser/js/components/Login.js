import React from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import { setUser } from '../redux/login';

/* -----------------    COMPONENT     ------------------ */

class Login extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   user: {},
    //   isAdmin: ''
    // }
    this.onLoginSubmit = this.onLoginSubmit.bind(this);
  }

  // componentWillReceiveProps(newProps, oldProps) {
  //   this.setState({
  //     user: newProps.user,
  //     isAdmin: newProps.user.isAdmin
  //   })
  // }

  render() {
    const { message } = this.props;
    return (
      <div className="signin-container">
        <div className="buffer local">
          <form onSubmit={this.onLoginSubmit}>
            <div className="form-group">
              <label>email</label>
              <input
                name="email"
                type="email"
                className="form-control"
                required
              />
            </div>
            <div className="form-group">
              <label>password</label>
              <input
                name="password"
                type="password"
                className="form-control"
                required
              />
            </div>
            <button type="submit" className="btn btn-block btn-primary">{message}</button>
          </form>
        </div>
        <div className="or buffer">
          <div className="back-line">
            <span>OR</span>
          </div>
        </div>
        <div className="buffer oauth">
          <p>
            <a
              target="_self"
              href="/auth/google"
              className="btn btn-social btn-google">
              <i className="fa fa-google" />
              <span>{message} with Google</span>
            </a>
          </p>
        </div>
      </div>
    );
  }

  onLoginSubmit(event) {
    const { message } = this.props;
    console.log('this.props from Login', this.props)
    event.preventDefault();
    const user = {
      email: event.target.email.value,
      password: event.target.password.value
    };
    this.props.setUser(user);
  }

  // after the user inputs email and password, clicks login, they should be see either a success or not success
  // click button axios will hit the /login post request

}

/* -----------------    CONTAINER     ------------------ */

const mapState = ({ login }) => ({
  login,
  message: 'Log in'
});
const mapDispatch = { setUser };

export default connect(mapState, mapDispatch)(Login);
