import React from "react";
import "./index.scss";
import addDocs from "../../assets/addDocs.png";

export default function CreateDoc() {
  return (
    <div className="new-doc-container">
      <div className="new-doc-inner">
        <p>Start a new document</p>
        <img className="start-docs" src={addDocs} alt="plusIcon" />
        <p className="doc-title">Blank</p>
        {/* <div className="start-docs">
          <div className="start-docs-card"></div>
          
        </div> */}
      </div>
    </div>
  );
}
