import './User.css';

export const User = (props) => {
    const { name, username, email } = props;
    return (
        <div className="user-card">
            <div className="user-avatar">
                {name?.charAt(0).toUpperCase()}
            </div>
            <div className="user-info">
                <h3 className="user-name">{name}</h3>
                <p className="user-username">@{username}</p>
                <p className="user-email">{email}</p>
            </div>
        </div>
    );
}