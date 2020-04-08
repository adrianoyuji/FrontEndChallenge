import React, { useEffect, useState } from "react";
import axios from "axios";
import "./index.css";
import Track from "../../components/Track/index";

const iTunes_Api_Url =
  "https://itunes.apple.com/us/rss/topalbums/limit=100/json";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [albumList, setAlbumList] = useState([]);

  useEffect(() => {
    axios.get(iTunes_Api_Url).then((res) => {
      setAlbumList(res.data);
      setLoading(false);
    });
  }, []);

  console.log(albumList);

  function renderTrackList() {
    return (
      <div className="AlbumList">
        <h1>Top 100</h1>
        {albumList.feed.entry.map((album, index) => (
          <Track album={album} key={index} index={index + 1} />
        ))}
      </div>
    );
  }

  return (
    <div className="body">
      {loading ? <div>Loading...</div> : renderTrackList()}
    </div>
  );
}
