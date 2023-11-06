import React, { useEffect, useState } from "react";
import axios from "axios";
// https://api.github.com/users/
const FetchData = () => {
  const [githubData, setGithubData] = useState([]);
  const [userName, setUserName] = useState("");
  const [user, setUser] = useState("");

  useEffect(() => {
    if (user) {
      axios
        .get(`https://api.github.com/users/${user}`)
        .then((res) => {
          setGithubData(res.data);
        })
        .catch(() => {
          console.log("Error occured");
        });
    }
  }, [user]);

  const setTextData = () => {
    setUser(userName);
  };

  return (
    <>
      <input
        type="text"
        value={userName}
        onChange={(e) => {
          setUserName(e.target.value);
        }}
      />
      <button onClick={setTextData}>Get Result</button>
      <p>You have Searched for : {user}</p>
      <div className="data">
        <p>{githubData.name}</p>
        <p>{githubData.bio}</p>
        <p>{githubData.followers}</p>
        <p>{githubData.following}</p>
        <p>{githubData.twitter_username}</p>
        <p>{githubData.blog}</p>
      </div>
    </>
  );
};

export default FetchData;
