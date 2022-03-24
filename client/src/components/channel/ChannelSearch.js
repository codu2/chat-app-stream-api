import React, { useState, useEffect } from "react";
import { useChatContext } from "stream-chat-react";

import "./ChannelSearch.css";
import { AiOutlineSearch } from "react-icons/ai";

const ChannelSearch = () => {
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState("");

  const getChannels = async (text) => {
    try {
    } catch (error) {
      setQuery("");
    }
  };

  const onSearch = (event) => {
    event.preventDefault();

    setLoading(true);
    setQuery(event.target.value);
    getChannels(event.target.value);

    if (!event.target.value) return;
  };

  return (
    <div className="channel-search__container">
      <div className="channel-search__input__wrapper">
        <div className="channel-search__input__icon">
          <AiOutlineSearch />
        </div>
        <input
          className="channel-search__input__text"
          placeholder="Search"
          type="text"
          value={query}
          onChange={onSearch}
        />
      </div>
    </div>
  );
};

export default ChannelSearch;
