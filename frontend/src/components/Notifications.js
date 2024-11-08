import React, { useState, useEffect } from 'react';

function Notifications() {
    const [notifications, setNotifications] = useState([]);

    useEffect(() => {
        // Fetch notifications (to be integrated with backend)
        setNotifications([
            { id: 1, message: 'New project added!' },
            { id: 2, message: 'Volunteer request approved' },
        ]);
    }, []);

    return (
        <div className="notifications">
            {notifications.map(notification => (
                <div key={notification.id} className="notification">
                    {notification.message}
                </div>
            ))}
        </div>
    );
}

export default Notifications;
