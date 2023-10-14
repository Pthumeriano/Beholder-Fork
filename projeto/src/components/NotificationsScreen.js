import React from 'react';
import '../Styles/NotificationsScreen.css'; 

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
    // Você pode adicionar exemplos de notificações aqui ou passá-los como props
    return (
        <div className="notifications-screen">
            {notifications.map((notification, index) => (
                <NotificationItem key={index} {...notification} />
            ))}
        </div>
    );
};

export default NotificationsScreen;
