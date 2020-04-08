import React, { useState } from "react";
import "./index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";

export default function Track(props) {
  const [selected, setSeleceted] = useState(false);

  const renderNormal = () => {
    return (
      <div className="regularContainer" onClick={() => setSeleceted(true)}>
        <div className="index">
          <h4>#{props.index}</h4>
        </div>
        <img
          height={props.album["im:image"][0].attributes.height}
          src={props.album["im:image"][0].label}
          alt={props.album["im:name"].label}
        />
        <div className="info">{props.album.title.label}</div>
        <div className="icon" onClick={() => setSeleceted(true)}>
          <FontAwesomeIcon icon={faChevronDown} size="1x" />
        </div>
      </div>
    );
  };

  const renderSelected = () => {
    return (
      <div className="expandedContainer">
        <div className="index">
          <h4>#{props.index}</h4>
        </div>
        <img
          height={props.album["im:image"][2].attributes.height}
          src={props.album["im:image"][2].label}
          alt={props.album["im:name"].label}
        />
        <div className="info">
          <div className="title">{props.album.title.label}</div>
          <div className="category">{props.album.category.attributes.term}</div>
          <div className="price">{props.album["im:price"].label}</div>
          <a className="purchaseBtn" href={props.album.id.label}>
            Purchase on iTunes
          </a>
        </div>
        <div className="icon" onClick={() => setSeleceted(false)}>
          <FontAwesomeIcon icon={faChevronUp} size="1x" />
        </div>
      </div>
    );
  };

  return <div>{selected ? renderSelected() : renderNormal()}</div>;
}
