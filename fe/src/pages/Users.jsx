import { useEffect, useState } from "react";
import { getAllUsers } from "../api/services/userServices.js";
import { User } from "../components/user/User.jsx";


export const Users = () => {
  
  const [user, setUsers] = useState([])
  const [query, setQuery] = useState("")


  useEffect(() => {
    getAllUsers().then((data) => {
       setUsers(data);
    });
  }, [])


  const handleChange = (event) => {
    console.log(event.target.value);
    setQuery(event.target.value);
  }

  const handleSearch = (event) => {
    if (!event) return;
    event.preventDefault();
    if (!query) {
      getAllUsers().then((data) => {
        setUsers(data);
      });
      return;
    }
    const result = user.filter((u) => u.name.toLowerCase().includes(query.toLowerCase()));
    setUsers(result);
  }

  return (
    <>
    <form onSubmit={handleSearch}>
      <input type="text" placeholder="Search..." onChange={handleChange} />

      <input type="submit" value="Search" />
    </form>

    {user.map((u) => (<User key={u.id} {...u} />
    ))}
    </>
  )
}