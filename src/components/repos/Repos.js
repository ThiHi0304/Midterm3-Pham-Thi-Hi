import React from "react";
import RepoItem from "./RepoItem";
const Repos = ({ repos }) => {
  return (
    <div>
      <h2>Repositories</h2>
      {repos.map((repo) => (
        <RepoItem key={repo.id} repo={repo} />
      ))}
    </div>
  );
};

export default Repos;
