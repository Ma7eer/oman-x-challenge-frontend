import React, {useState, useEffect} from "react";
import axios from "axios";

import Container from "../components/layout/Container";

import {SERVER_URL} from "../constants"

const BankStatements = () => {

    const [tableData, setTableData] = useState([])
    useEffect(() => {
      axios.get(SERVER_URL + '/invoices').then(res => {
        setTableData(res.data.invoices)
      }).catch(err => console.log(err))
    }, [])
    return (
      <Container>
        <h1>Bank Statement list</h1>
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
              <th scope="col">ID</th>
              <th scope="col">Name</th>
              <th scope="col">invoice Date</th>
              <th scope="col">View Bank Statement</th>
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
                <td><button className="btn btn-outline-primary">View</button></td>
                </tr>
                )
              })}
           
          </tbody>
        </table>
      </Container>
  );
};

export default BankStatements;
