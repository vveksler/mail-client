import React, { Component } from 'react';
import { Switch, Route, NavLink, withRouter } from 'react-router-dom';
import Home from '../Home';
import InboxList from '../InboxList';
import InboxMail from '../InboxMail';
import OutboxList from '../OutboxList';
import OutboxMail from '../OutboxMail';
import styles from './AppRouter.module.css';

const AppRouter = class extends Component {
  render() {
    const { match } = this.props;

    return (
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <nav className={styles.nav}>
            <ul className={`${styles.navList} t-nav-list`}>
              <li className={styles.navElement}>
                <NavLink
                  exact
                  activeClassName="active"
                  to={`${match.url}`}
                  className={`${styles.link} t-link-home`}
                >
                  Home
                </NavLink>
              </li>
              <li className={styles.navElement}>
                <NavLink
                  exact
                  activeClassName="active"
                  to={`${match.url}/inbox`}
                  className={`${styles.link} t-link-inbox`}
                >
                  Inbox
                </NavLink>
              </li>
              <li className={styles.navElement}>
                <NavLink
                  exact
                  activeClassName="active"
                  to={`${match.url}/outbox`}
                  className={`${styles.link} t-link-outbox`}
                >
                  Outbox
                </NavLink>
              </li>
            </ul>
          </nav>
          <div className={styles.content}>
            <h3 className={styles.title}>
              <Switch>
                <Route path={match.path} exact render={() => 'Home'} />
                <Route path={`${match.path}/inbox`} render={() => 'Inbox'} />
                <Route path={`${match.path}/outbox`} render={() => 'Outbox'} />
              </Switch>
            </h3>
            <Switch>
              <Route path={match.path} exact component={Home} />
              <Route path={`${match.path}/inbox`} exact component={InboxList} />
              <Route path={`${match.path}/inbox/:id`} component={InboxMail} />
              <Route
                path={`${match.path}/outbox`}
                exact
                component={OutboxList}
              />
              <Route path={`${match.path}/outbox/:id`} component={OutboxMail} />
            </Switch>
          </div>
        </div>
      </div>
    );
  }
};

export default withRouter(AppRouter);

// Реализуйте роутер приложения.
// Здесь должны быть обьявлены роуты,
// которые будут доступны авторизованному пользователю.
// - Home
// - InboxList
// - InboxMail
// - OutboxList
// - OutboxMail

// Так же в этом файле обьявите лейаут,
// используйте стили из AppRouter.module.css
