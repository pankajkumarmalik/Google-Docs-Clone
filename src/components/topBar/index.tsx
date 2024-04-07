import React from "react";
import "./index.scss";
import docsIcon from "../../assets/docsIcon.png";

export default function TopBar({ photoURL }: TopbarProps) {
  //console.log(photoURL);
  return (
    <div className="top-bar">
      <div className="topBar-left">
        <img className="docs-icon" src={docsIcon} alt="docsIcon" />
        <p className="top-title">Docs</p>
      </div>
      <img className="top-image" src={photoURL} alt="profilePhoto" />
    </div>
  );
}
