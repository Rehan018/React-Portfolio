import React, { Component } from "react";
import './UserAuth.css';

class UserAuth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: true,
      email: '',
      password: ''
    };
  }

  toggleAuth = () => {
    this.setState(prevState => ({
      isLogin: !prevState.isLogin
    }));
  }

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    // Add your authentication logic here
    const { email, password, isLogin } = this.state;
    if (isLogin) {
      // Handle login
      console.log('Logging in with email:', email, 'and password:', password);
    } else {
      // Handle registration
      console.log('Registering with email:', email, 'and password:', password);
    }
    // Reset the form fields
    this.setState({
      email: '',
      password: ''
    });
  }

  render() {
    const { isLogin, email, password } = this.state;

    return (
      <section className="user-auth section">
        <h2 className="section__title">{isLogin ? 'Login' : 'Register'}</h2>
        <span className="section__subtitle">Welcome Back!</span>

        <form className="user-auth__form" onSubmit={this.handleSubmit}>
          <div className="user-auth__form-control">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={this.handleInputChange}
              required
            />
          </div>
          <div className="user-auth__form-control">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={this.handleInputChange}
              required
            />
          </div>
          <button type="submit" className="user-auth__submit">
            {isLogin ? 'Login' : 'Register'}
          </button>
        </form>

        <p className="user-auth__toggle" onClick={this.toggleAuth}>
          {isLogin ? 'Don\'t have an account? Register here.' : 'Already have an account? Login here.'}
        </p>
      </section>
    );
  }
}

export default UserAuth;
