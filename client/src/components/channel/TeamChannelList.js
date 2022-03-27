import React from "react";

import "./TeamChannelList.css";
import { AiOutlinePlus } from "react-icons/ai";

const TeamChannelList = ({
  children,
  error = false,
  loading,
  type,
  isCreating,
  setIsCreating,
  setIsEditing,
  setCreateType,
  setToggleContainer,
}) => {
  if (error) {
    return type === "team" ? (
      <div className="team-channel-list">
        <p className="team-channel-list__message">
          Connection error, please wait a moment and try again.
        </p>
      </div>
    ) : null;
  }

  if (loading) {
    return (
      <div className="team-channel-list">
        <p className="team-channel-list__message loading">
          {type === "team" ? "Channels" : "Messages"} loading...
        </p>
      </div>
    );
  }

  return (
    <div className="team-channel-list">
      <div className="team-channel-list__header">
        <p className="team-channel-list__header__title">
          {type === "team" ? "Channels" : "Direct Messages"}
        </p>
        <span
          onClick={() => {
            setCreateType(type === "team" ? "team" : "messaging");
            setIsCreating(true);
            if (setIsEditing) setIsEditing(false);
            if (setToggleContainer) setToggleContainer((prev) => !prev);
          }}
        >
          <AiOutlinePlus />
        </span>
      </div>
      {children}
    </div>
  );
};

export default TeamChannelList;
