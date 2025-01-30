import React from "react";
import "./feeds.css";
import { Link } from "react-router-dom";

//Components...........

import CommentData from "../../FackApis/CommentData";
import CurrentUserData from "../../FackApis/CurrentUserData";

//Font Awesome Icons............
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment, faListDots, faShare, faHeart } from "@fortawesome/free-solid-svg-icons";

//States...........
import { useState } from "react";


export default function Feed({ feed }) {
  
  let [openComment, setOpenComment] = useState(false);
  const CommentHandler = () => {
    setOpenComment(!openComment);
  }
  
  
  return (
    <div className="feed">
      <div className="top-content">
        <Link to="/profile/id">
          <div className="user">
            <img src={feed.feedProfile} alt="" />
            <div>
              <h5>{feed.name}</h5>
              <small>1 Minutes Ago</small>
            </div>
          </div>
        </Link>
        <span>
          <FontAwesomeIcon icon={faListDots} />
        </span>
      </div>
      <div className="mid-content">
        <p>{feed.desc}</p>
        <img src={feed.feedImage} alt="" />
      </div>
      <div className="bottom-content">
        <div className="action-item">
          <span><FontAwesomeIcon icon={faHeart} /> 14 Likes</span>
        </div>
        <div className="action-item" onClick={CommentHandler}>
          <span><FontAwesomeIcon icon={faComment} /> 2 Comments</span>
        </div>
        <div className="action-item">
          <span><FontAwesomeIcon icon={faShare} /> 5 Shared</span>
        </div>
      </div>
      {openComment && <Comments/>} }
    </div>
  );
}
