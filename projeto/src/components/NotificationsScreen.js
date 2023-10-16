// NotificationsScreen.js

import React from 'react';
import '../Styles/NotificationsScreen.css';
import P1 from '../img/p1.jpg';
import P2 from '../img/p2.jpg';
import P3 from '../img/p3.jpg';

const NotificationItem = ({ type, avatar, name, action, content }) => {
  return (
    <div className="notification-item">
      <img src={avatar} alt={name} className="notification-avatar" />
      <div className="notification-text">
        <strong>{name}</strong> {action}
        {content && <p>{content}</p>}
      </div>
      {type === 'like' && <div className="like-icon">&#10084;</div>}
    </div>
  );
};

const NotificationsScreen = ({ notifications = [] }) => {
  const exampleNotifications = [
    {
      type: 'like',
      avatar: P1,
      name: 'João',
      action: 'curtiu sua postagem.',
    },
    {
      type: 'comment',
      avatar: P2,
      name: 'Maria',
      action: 'comentou na sua postagem.',
      content: 'Isso ficou incrível!',
    },
    {
      type: 'follow',
      avatar: P3,
      name: 'Lucas',
      action: 'começou a seguir você.',
    },
  ];

  const allNotifications = [...exampleNotifications, ...notifications];

  return (
    <div className="notifications-screen">
      {allNotifications.map((notification, index) => (
        <NotificationItem key={index} {...notification} />
      ))}
    </div>
  );
};

export default NotificationsScreen;
