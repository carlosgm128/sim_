import { useState } from "react";
import { useFetchAllUser } from "../hooks/useUserQuery.js";
import { User } from "../components/user/User.jsx";

export const Users = () => {
  const { data: users = [], isLoading, error } = useFetchAllUser();
  const [query, setQuery] = useState("");
  const [filteredUsers, setFilteredUsers] = useState([]);

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSearch = (event) => {
    if (!event) return;
    event.preventDefault();
    if (!query) {
      setFilteredUsers([]);
      return;
    }
    const result = users.filter((u) => 
      u.name.toLowerCase().startsWith(query.toLowerCase())
    );
    setFilteredUsers(result);
  };

  const displayUsers = filteredUsers.length > 0 ? filteredUsers : users;

  if (isLoading) return <div className="loading-state">Loading users...</div>;
  if (error) return <div className="error-state">Error loading users</div>;

  return (
    <div>
      <div className="page-header">
        <h1>Users</h1>
      </div>
      
      <form className="search-form" onSubmit={handleSearch}>
        <input 
          type="text" 
          placeholder="Search users..." 
          value={query}
          onChange={handleChange} 
        />
        <input type="submit" value="Search" />
      </form>

      <div className="users-grid">
        {displayUsers.map((u) => (
          <User key={u.id} {...u} />
        ))}
      </div>
    </div>
  );
}