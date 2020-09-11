import React, { useState } from "react";
import "./App.css";

import ReactLoading from "react-loading";
import axios from "axios";

const SERVER_URL = "https://limitless-wildwood-95242.herokuapp.com/upload";

const generateDateWithCorrectFormat = (dateValue) => {
  let year = new Date(dateValue).getFullYear();
  let month = new Date(dateValue).getMonth();
  let day = new Date(dateValue).getDate();
  return day < 10 && month < 10
    ? `${year}-0${month}-0${day}`
    : month < 10
    ? `${year}-${month}-0${day}`
    : day < 10
    ? `${year}-${month}-0${day}`
    : `${year}-${month}-${day}`;
};

function App() {
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState("Choose file");
  const [status, setStatus] = useState("IDLE"); // IDLE
  // form values
  const [balanceDue, setBalanceDue] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [invoiceNo, setInvoiceNo] = useState("");
  const [invoiceDate, setInvoiceDate] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFileName("Choose file");
    setStatus("LOADING");

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
        setStatus("SHOW");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="App container mt-5">
      <h1 className="mb-4">Select a file to upload</h1>
      <form onSubmit={handleSubmit}>
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <button className="btn btn-info">Submit</button>
          </div>
          <div className="custom-file">
            <input
              type="file"
              name="file"
              className="custom-file-input"
              id="inputGroupFile01"
              onChange={(e) => {
                setFileName(e.target.files[0].name);
                setFile(e.target.files[0]);
              }}
            />
            <label className="custom-file-label" htmlFor="inputGroupFile01">
              {fileName}
            </label>
          </div>
        </div>
      </form>
      {status === "IDLE" ? null : status === "LOADING" ? (
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
    </div>
  );
}

export default App;
