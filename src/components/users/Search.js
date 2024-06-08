import React, { useState, useEffect } from "react";
import Users from "./Users";
import axiosService from '../../api';
import { useHistory, useLocation } from "react-router-dom";

const Search = () => {
  const [text, setText] = useState("");
  const [users, setUsers] = useState([]);
  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    const query = new URLSearchParams(location.search);
    const queryText = query.get("q");
    if (queryText) {
      setText(queryText);
      searchUsers(queryText);
    } else {
      // Load users from localStorage if available
      const savedUsers = localStorage.getItem("users");
      const savedText = localStorage.getItem("searchText");
      if (savedUsers) {
        setUsers(JSON.parse(savedUsers));
        setText(savedText || "");
      }
    }
  }, [location.search]);

  const searchUsers = async (text) => {
    try {
      const response = await axiosService.get(`/search/users?q=${text}`);
      setUsers(response.data.items);
      // Save search result to localStorage
      localStorage.setItem("users", JSON.stringify(response.data.items));
      localStorage.setItem("searchText", text);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const clearUsers = () => {
    setUsers([]);
    localStorage.removeItem("users");
    localStorage.removeItem("searchText");
    history.push("");
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (text === "") {
      alert("Please enter something");
    } else {
      history.push(`?q=${text}`);
      searchUsers(text);
      setText("");
    }
  };

  const onChange = (e) => setText(e.target.value);

  return (
    <div>
      <form onSubmit={onSubmit} className="form">
        <input
          type="text"
          name="text"
          placeholder="Search User"
          value={text}
          onChange={onChange}
        />
        <input
          type="submit"
          value="Search"
          className="btn btn-success btn-block"
        />
      </form>
      {users.length > 0 && (
        <button className="btn btn-danger btn-block" onClick={clearUsers}>
          Clear
        </button>
      )}
      <Users users={users} />
    </div>
  );
};

export default Search;
