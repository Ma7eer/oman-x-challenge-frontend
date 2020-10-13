import React, { useEffect, useState } from "react";
import axios from "axios";

import Container from "../components/layout/Container";

import {SERVER_URL} from "../constants"

const Invoices = () => {
  const [tableData, setTableData] = useState([])
  useEffect(() => {
    axios.get(SERVER_URL + '/invoices').then(res => {
      console.log(res.data.invoices)
      setTableData(res.data.invoices.reverse())
    }).catch(err => console.log(err))
  }, [])
  return (
    <Container>
      <h1>Invoices list</h1>
      <hr />
      <div style={{ float: "right", margin: "10px" }}>
        <button
          className="btn btn-outline-info"
          style={{ margin: "4px 0px 4px 4px" }}
        >
          Export CSV
        </button>
        <button
          className="btn btn-outline-info"
          style={{ margin: "4px 0px 4px 4px" }}
        >
          Print
        </button>
      </div>

      <table className="table table-hover" style={{ cursor: "pointer" }}>
        <thead className="thead-dark">
          <tr>
            <th scope="col">
              <input type="checkbox" />
            </th>
            <th scope="col">Company</th>
            <th scope="col">Invoice no.</th>
            <th scope="col">invoice Date</th>
            <th scope="col">Due Date</th>
            <th scope="col">Balance</th>
          </tr>
        </thead>
        <tbody>
          
            {tableData.map(data => {
              return (
                <tr>
              <td><input type="checkbox" /></td>
              <td>{data.companyName}</td>
              <td>{data.invoiceNo}</td>
              <td>{data.invoiceDate}</td>
              <td>{data.dueDate}</td>
              <td>{data.balanceDue}</td>
              </tr>
              )
            })}
         
        </tbody>
      </table>
    </Container>
  );
};

export default Invoices;
