
export const User = (props) => {
    const { name, username, email } = props;
    return (<div style={{border: '1px solid black', padding: '10px', color: 'black', backgroundColor: "brown", maxWidth: '80%', margin: 'auto', borderRadius: '10px'}}>
        <p>{name}</p>
        <p>{username}</p>
        <p>{email}</p>
    </div>);
}