import React from "react";

import Container from "../components/layout/Container";

const Invoices = () => {
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
          <tr>
            <td>
              <input type="checkbox" />
            </td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>@mdo</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <td>
              <input type="checkbox" />
            </td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
            <td>@fat</td>
            <td>@fat</td>
          </tr>
          <tr>
            <td>
              <input type="checkbox" />
            </td>
            <td>Larry the Bird</td>
            <td>@twitter</td>
            <td>@twitter</td>
            <td>@twitter</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
};

export default Invoices;
