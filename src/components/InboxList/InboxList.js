import React, { Component } from 'react';
import MailList from '../MailList';
import { withData } from '../../context/Data';

const InboxList = class extends Component {
  render() {
    const {
      data: { inbox }
    } = this.props;

    return <MailList className="t-inbox-list" mails={inbox} />;
  }
};

export default withData(InboxList);

// Реализуйте компонент InboxList
// Он должен показывать список входящих писем.
// Используйте HOC withData из `/context/Data` чтобы получить данные.

// Этот компонент должен использовать MailList для отображения данных.
