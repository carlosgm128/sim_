 export const Post = (props) => {
     const { title, body, username } = props;
     return (<div style={{ color:'white', backgroundColor:'brown', maxWidth: '80%', margin: 'auto', padding: '10px', borderRadius: '10px', marginBottom: '10px' }}>

         <h2>{title}</h2>
            <p>by user: {username}</p>
         <p>{body}</p>
     </div>);
 }