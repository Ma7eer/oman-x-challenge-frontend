import React, { useState } from "react";

import Container from "../components/layout/Container";
import Header from "../components/common/Header";

import "../assets/css/App.css";
import UploadForm from "../components/common/UploadForm";

const pageState = {
  IDLE: "IDLE",
  LOADING: "LOADING",
  SHOW: "SHOW",
};

const BankStatementUpload = () => {
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState("Choose file");
  const [status, setStatus] = useState(pageState.IDLE);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFileName("Choose file");
    setStatus(pageState.LOADING);

    // Upload file
    const data = new FormData();
    data.append("file", file);

    console.log(data);
  };

  return (
    <Container>
      <Header text={"Select Bank Statement to upload"} />
      <UploadForm
        handleSubmit={handleSubmit}
        setFileName={setFileName}
        setFile={setFile}
        fileName={fileName}
      />
    </Container>
  );
};

export default BankStatementUpload;
