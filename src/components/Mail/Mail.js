import React, { Component, Fragment } from 'react';
import styles from './Mail.module.css';

export default class Mail extends Component {
  get renderFrom() {
    const { from } = this.props;

    return (
      <Fragment>
        From: <b>{from}</b>
      </Fragment>
    );
  }

  get renderTo() {
    const { to } = this.props;

    return (
      <Fragment>
        To: <b>{to}</b>
      </Fragment>
    );
  }

  render() {
    const { from, to, body } = this.props;

    return (
      <div className={styles.container}>
        <p className={`t-mail-${from ? 'from' : 'to'}`}>
          {from && this.renderFrom}
          {to && this.renderTo}
        </p>
        <p className="t-mail-body">{body}</p>
      </div>
    );
  }
}

// Изучите файл `/cypress/integration/homework.spec.js`, чтобы понять,
// какие классы должен использовать компонент.
