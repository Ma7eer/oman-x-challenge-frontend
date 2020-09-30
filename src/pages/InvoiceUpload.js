import React, { useState } from "react";
import ReactLoading from "react-loading";
import axios from "axios";

import { SERVER_URL } from "../constants";

import Container from "../components/layout/Container";
import Header from "../components/common/Header";
import UploadForm from "../components/common/UploadForm";

import { generateDateWithCorrectFormat } from "../utils/dataFormatter";

import "../assets/css/App.css";

const pageState = {
  IDLE: "IDLE",
  LOADING: "LOADING",
  SHOW: "SHOW",
};

const InvoiceUpload = () => {
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState("Choose file");
  const [status, setStatus] = useState(pageState.IDLE);
  // form values
  const [balanceDue, setBalanceDue] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [invoiceNo, setInvoiceNo] = useState("");
  const [invoiceDate, setInvoiceDate] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFileName("Choose file");
    setStatus(pageState.LOADING);

    // Upload file
    const data = new FormData();
    data.append("file", file);

    axios
      .post(SERVER_URL, data, {})
      .then((res) => {
        setBalanceDue(res.data.data.balanceDue);
        setCompanyName(res.data.data.companyName);
        setDueDate(generateDateWithCorrectFormat(res.data.data.dueDate));
        setInvoiceDate(
          generateDateWithCorrectFormat(res.data.data.invoiceDate)
        );
        setInvoiceNo(res.data.data.invoiceNo);
        setStatus(pageState.SHOW);
      })
      .catch((err) => console.log(err));
  };

  return (
    <Container>
      <Header text={"Select an invoice to upload"} />
      <UploadForm
        handleSubmit={handleSubmit}
        setFileName={setFileName}
        setFile={setFile}
        fileName={fileName}
      />
      {status === pageState.IDLE ? null : status === pageState.LOADING ? (
        <div
          style={{ display: "flex", justifyContent: "center" }}
          className="mb-3"
        >
          <ReactLoading
            type={"bars"}
            color={"#17a2b8"}
            height={"20%"}
            width={"20%"}
          />
        </div>
      ) : (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <img
            src={URL.createObjectURL(file)}
            alt="file"
            width="512px"
            style={{ border: "1px solid black" }}
          />
          <form
            style={{
              display: "flex",
              flexDirection: "column",
              width: "500px",
              marginLeft: "12px",
              padding: "18px",
            }}
            className="card"
          >
            <h1 className="mb-3">Generated Form</h1>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
              className="mb-4"
            >
              <label>Company Name: </label>
              <input
                type="text"
                name="companyName"
                value={companyName}
                placeholder="Company Name"
                style={{ width: "100%" }}
                className="form-control"
                onChange={(e) => setCompanyName(e.target.value)}
              />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
              className="mb-4"
            >
              <label>Invoice No: </label>
              <input
                type="text"
                name="invoiceNo"
                value={invoiceNo}
                placeholder="Invoice No"
                style={{ width: "100%" }}
                className="form-control"
                onChange={(e) => setInvoiceNo(e.target.value)}
              />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
              className="mb-4"
            >
              <label>Invoice Date: </label>
              <input
                type="date"
                name="invoiceDate"
                value={invoiceDate}
                placeholder="Invoice Date"
                style={{ width: "100%" }}
                className="form-control"
                onChange={(e) => setInvoiceDate(e.target.value)}
              />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
              className="mb-4"
            >
              <label style={{ textDecoration: "bold" }}>Due Date: </label>
              <input
                type="date"
                name="dueDate"
                value={dueDate}
                placeholder="Due Date"
                style={{ width: "100%" }}
                className="form-control"
                onChange={(e) => setDueDate(e.target.value)}
              />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
              className="mb-4"
            >
              <label>Balance Due: </label>
              <input
                type="text"
                name="balanceDue"
                value={balanceDue}
                placeholder="Balance Due"
                style={{ width: "100%" }}
                className="form-control"
                onChange={(e) => setBalanceDue(e.target.value)}
              />
            </div>
            <button className="btn btn-success">Verify</button>
          </form>
        </div>
      )}
    </Container>
  );
};

export default InvoiceUpload;
