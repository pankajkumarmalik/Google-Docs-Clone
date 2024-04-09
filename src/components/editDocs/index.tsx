import { useEffect, useRef, useState } from "react";
import "./index.scss";
import { MdKeyboardBackspace } from "react-icons/md";
import ReactQuill from "react-quill";
import EditorToolbar, { modules, formats } from "../toolBar";

export default function EditDoc({ handleEdit }: functionInterfaces) {
  let quillRef = useRef<any>(null);
  const [value, setValue] = useState("");

  useEffect(() => {
    quillRef.current.focus();
  }, []);
  return (
    <div className="edit-container">
      <MdKeyboardBackspace
        onClick={handleEdit}
        size={30}
        className="react-icon"
      />
      <div className="quill-container">
        <EditorToolbar />
        <ReactQuill
          className="quill"
          theme="snow"
          ref={quillRef}
          value={value}
          onChange={setValue}
          modules={modules}
          formats={formats}
        />
      </div>
    </div>
  );
}
