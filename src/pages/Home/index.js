import React, { useEffect, useState } from "react";
import axios from "axios";
import "./index.css";
import Track from "../../components/Track/index";
import SearchBar from "../../components/SearchBar/index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";

const iTunes_Api_Url =
  "https://itunes.apple.com/us/rss/topalbums/limit=100/json";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [albumList, setAlbumList] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filter, setFilter] = useState("name");
  const [genre, setGenre] = useState("All");

  useEffect(() => {
    axios.get(iTunes_Api_Url).then((res) => {
      setAlbumList(res.data);
      setLoading(false);
    });
  }, []);

  console.log(albumList);

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  const handleSelect = (e) => {
    setFilter(e.target.value);
  };

  const handleGenre = (e) => {
    setGenre(e.target.value);
  };

  const handleSearch = () => {
    albumList.feed.entry.filter((album, index) =>
      album.category.attributes.label.includes(searchText)
    );
  };

  const handleChange = (e) => {
    setSearchText(e.target.value);
  };

  const handleClear = () => {
    setSearchText("");
    setGenre("All");
  };
  function renderTrackList() {
    let list = albumList.feed.entry;
    let genreList = [];

    albumList.feed.entry.forEach((item) => {
      if (genreList.includes(item.category.attributes.label) === false) {
        genreList.push(item.category.attributes.label);
      }
    });

    if (searchText !== "" && filter === "name") {
      list = list.filter((album, index) =>
        album["im:name"].label.includes(searchText)
      );
    }

    if (searchText !== "" && filter === "author") {
      list = list.filter((album, index) =>
        album["im:artist"].label.includes(searchText)
      );
    }
    if (genre !== "All")
      list = list.filter((album) => album.category.attributes.label === genre);

    return (
      <div className="AlbumList">
        <h1>{albumList.feed.title.label}</h1>
        <SearchBar
          handleSearch={handleSearch}
          handleChange={handleChange}
          searchText={searchText}
          handleSelect={handleSelect}
          genreList={genreList}
          handleGenre={handleGenre}
          handleClear={handleClear}
        />
        {list.map((album, index) => (
          <Track album={album} key={index} index={index + 1} />
        ))}
        <div className="rights">{albumList.feed.rights.label}</div>
      </div>
    );
  }

  return (
    <div className="body">
      {loading ? <div className="loading">Loading...</div> : renderTrackList()}
      <div className="scrollTop" onClick={() => scrollToTop()}>
        <FontAwesomeIcon icon={faAngleUp} size="3x" />
      </div>
    </div>
  );
}
