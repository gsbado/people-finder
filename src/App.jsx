import { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar";
import UserList from "./components/UserList";
import "./styles/App.css";

function App() {
  const [users, setUsers] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        setFiltered(data);
      })
      .catch(() => setError("Failed to fetch users"))
      .finally(() => setLoading(false));
  }, []);

  const handleSearch = (text) => {
    const result = users.filter((user) =>
      user.name.toLowerCase().includes(text.toLowerCase())
    );
    setFiltered(result);
  };

  return (
    <div className="container">
      <h1>People Finder</h1>
      <SearchBar onSearch={handleSearch} />

      {loading && <p className="loading">Loading...</p>}
      {error && <p className="error">{error}</p>}

      <UserList users={filtered} />
    </div>
  );
}

export default App;