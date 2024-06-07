import React, { useState } from "react";
import Users from "./Users";
import axiosService from '../../api';
const Search = () => {
  const [text, setText] = useState("");
  const [users, setUsers] = useState([]);
  const searchUsers = async (text) => {
    try {
      const response = await axiosService.get(
        `/search/users?q=${text} `
      );
      setUsers(response.data.items);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const clearUsers = () => {
    setUsers([]);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (text === "") {
      alert("Please enter something");
    } else {
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
      {/*Adding Clear button */}
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
