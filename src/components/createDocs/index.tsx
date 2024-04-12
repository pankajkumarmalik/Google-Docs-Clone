import { useState } from "react";
import "./index.scss";
import addDocs from "../../assets/addDocs.png";
import EditDoc from "../editDocs";
import { createDoc } from "../../api/Firestore";

export default function CreateDoc() {
  const [isEdit, setIsEdit] = useState(false);
  const handleEdit = () => {
    setIsEdit(!isEdit);
  };

  const createDocument = () => {
    let payload = {
      value: "",
    };
    createDoc(payload);
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
          onClick={() => {
            handleEdit();
            createDocument();
          }}
        />
        <p className="doc-title">Blank</p>
      </div>
    </div>
  );
}
