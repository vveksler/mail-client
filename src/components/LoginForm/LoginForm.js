import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { withAuth } from '../../context/Auth';
import styles from './LoginForm.module.css';

const LoginForm = class extends Component {
  state = {
    email: '',
    password: ''
  };

  handleClick = e => {
    const { email, password } = this.state;
    const { authorize } = this.props;

    authorize(email, password);
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value
    });
  };

  render() {
    const { email, password } = this.state;
    const { isAuthorized, authError } = this.props;

    return isAuthorized ? (
      <Redirect to="/app" />
    ) : (
      <div className={styles.bg}>
        <div className={`${styles.form} t-form`}>
          <p>
            <label htmlFor="email">
              <span className={styles.labelText}>Почта</span>
            </label>
            <input
              onChange={this.handleChange}
              type="text"
              name="email"
              className={`${styles.input} t-input-email`}
              value={email}
            />
          </p>
          <p>
            <label htmlFor="password">
              <span className={styles.labelText}>Пароль</span>
            </label>
            <input
              onChange={this.handleChange}
              type="password"
              name="password"
              className={`${styles.input} t-input-password`}
              value={password}
            />
          </p>
          <p className={styles.error}>{authError}</p>
          <div className={styles.buttons}>
            <button
              onClick={this.handleClick}
              className={`${styles.button} t-login`}
            >
              Войти
            </button>
          </div>
        </div>
      </div>
    );
  }
};

export default withAuth(LoginForm);

// Реализуйте компонент формы логина.
// Используйте `/contexts/Auth` для получения метода authorize
// и статуса isAuthorized.

// Когда пользователь авторизован - перенаправьте его на роут /app
