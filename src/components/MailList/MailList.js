import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import styles from './MailList.module.css';

const MailList = class extends Component {
  renderMails = () => {
    const { match, mails } = this.props;

    return mails.map(mail => (
      <Link
        key={mail.id}
        className={styles.link}
        to={`${match.url}/${mail.id}`}
      >
        {mail.body.slice(0, 50)}...
      </Link>
    ));
  };

  render() {
    const { className, mails } = this.props;

    return (
      <div className={`${styles.container} ${className}`}>
        {mails.length && this.renderMails()}
      </div>
    );
  }
};

export default withRouter(MailList);
// Изучите файл `/cypress/integration/homework.spec.js`, чтобы понять,
// какие классы должен использовать компонент.
