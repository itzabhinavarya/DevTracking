import React, { useEffect, useState } from "react";
import { FaXTwitter } from "react-icons/fa6";
import { BsGlobe2 } from "react-icons/bs";
import { AiOutlineGithub } from "react-icons/ai";
import axios from "axios";
import { Link } from "react-router-dom";
import { useUser } from "../context/UserContext";

const Homepage = () => {
  const [inputSearch, setInputSearch] = useState("");
  const [user, setUser] = useState("");
  const [gitHubUser, setGithubUser] = useState([]);
  const [userStatus, setUserStatus] = useState(false);
  const [showAllRepo, setShowAllRepo] = useState(false)
  const { setUserName } = useUser()

  useEffect(() => {
    if (user) {
      setUserName(user)
      axios
        .get(`https://api.github.com/users/${user}`)
        .then((res) => {
          setGithubUser(res.data);
          setUserStatus(false);
        })
        .catch(() => {
          setUserStatus(true);
          console.log("Some error occured");
        });
    } else {
      console.log("user not exist");
    }
  }, [user, setUserName]);

  var JoinedDate = new Date(gitHubUser.created_at)
    .toLocaleDateString("en-GB", {
      day: "numeric",
      month: "short",
      year: "numeric",
    })
    .split(" ")
    .join(" ");

  const handleShowAllRepo = () => {
    setShowAllRepo(!showAllRepo)
  }

  return (
    <>
      <div className="">
        <div className="pt-2">
          <div className="flex justify-center py-5">
            <h2 className="text-3xl font-bold">
              Dev <span className="text-green-500">Tracking</span>
            </h2>
          </div>
          <div className="flex justify-center items-center gap-3">
            <input
              type="text"
              value={inputSearch}
              onChange={(e) => {
                setInputSearch(e.target.value);
              }}
              placeholder="Enter your Github Username"
              className="p-3 w-1/2 rounded-lg border hover:border hover:border-indigo-950 transition"
            />
            <button
              type="button"
              onClick={() => {
                setUser(inputSearch);
              }}
              className="flex py-3 px-6 tracking-wide rounded-lg bg-indigo-950 text-white font-semibold"
            >
              Search
            </button>
          </div>
        </div>
        {user && !userStatus && (
          <div className="flex justify-center mt-6">
            <div className="bg-white-500 shadow-md flex rounded-lg w-3/5">
              <div className="flex justify-center items-center p-5 border border-l-0 border-t-0 border-b-0 border-r-stone-400 ">
                <img
                  src={gitHubUser.avatar_url}
                  alt=""
                  className="w-56 rounded-full cursor-pointer"
                />
              </div>
              <div className="p-5 w-full">
                <div className="flex items-center justify-between">
                  <h2 className="font-semibold text-xl">{gitHubUser.name}</h2>
                  <p className="text-gray-400">Joined {JoinedDate}</p>
                </div>
                <div className="flex justify-between items-center py-4">
                  <Link to='/allrepo'>
                    <h2 className="font-semibold cursor-pointer" onClick={handleShowAllRepo}>
                      Repo : {gitHubUser.public_repos}
                    </h2>
                  </Link>
                  <h2 className="font-semibold">
                    Follower : {gitHubUser.followers}
                  </h2>
                  <h2 className="font-semibold">
                    Following : {gitHubUser.following}
                  </h2>
                </div>
                <div>
                  <p>{gitHubUser.bio}</p>
                </div>
                <div className="flex py-4 gap-5 items-center">
                  <a
                    href={`https://twitter.com/${gitHubUser.twitter_username}`}
                  >
                    <FaXTwitter size="1.3rem" className="cursor-pointer" />
                  </a>
                  <a href={gitHubUser.blog}>
                    <BsGlobe2 size="1.2rem" className="cursor-pointer" />
                  </a>
                  <a href={gitHubUser.html_url}>
                    <AiOutlineGithub
                      size="1.3rem"
                      className="scale-110 cursor-pointer"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
        {userStatus && (
          <div className="mt-10 flex">
            <div className="m-auto px-20 py-2 bg-green-400 rounded-lg">
              <p className="font-bold">Oopss...User Not Found!</p>
            </div>
          </div>
        )}
        {/* {showAllRepo && (
          <AllRepo userName={user} />
        )} */}
      </div>
    </>
  );
};

export default Homepage;
