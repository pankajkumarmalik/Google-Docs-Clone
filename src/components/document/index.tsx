import React from "react";
import TopBar from "../topBar";
import CreateDoc from "../createDocs";
import "./index.scss";

export default function Document({ photoURL }: TopbarProps) {
  return (
    <div>
      <TopBar photoURL={photoURL} />
      <CreateDoc />
    </div>
  );
}
