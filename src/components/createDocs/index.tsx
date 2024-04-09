import React, { useState } from "react";
import "./index.scss";
import addDocs from "../../assets/addDocs.png";
import EditDoc from "../editDocs";

export default function CreateDoc() {
  const [isEdit, setIsEdit] = useState(false);
  const handleEdit = () => {
    setIsEdit(!isEdit);
  };

  if (isEdit) return <EditDoc handleEdit={handleEdit} />;
  return (
    <div className="new-doc-container">
      <div className="new-doc-inner">
        <p>Start a new document</p>
        <img
          className="start-docs"
          src={addDocs}
          alt="plusIcon"
          onClick={handleEdit}
        />
        <p className="doc-title">Blank</p>
      </div>
    </div>
  );
}
