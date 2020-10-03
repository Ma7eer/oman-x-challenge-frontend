import React, { useState, useMemo } from "react";
import axios from "axios";
import { useTable } from "react-table";
import ReactLoading from "react-loading";

import { SERVER_URL } from "../constants";

import Container from "../components/layout/Container";
import Header from "../components/common/Header";

import "../assets/css/App.css";
import UploadForm from "../components/common/UploadForm";

const TableHeader = ({ headerGroups }) => {
  return (
    <thead className="thead-dark">
      {
        // Loop over the header rows
        headerGroups.map((headerGroup) => (
          // Apply the header row props
          <tr {...headerGroup.getHeaderGroupProps()}>
            {
              // Loop over the headers in each row
              headerGroup.headers.map((column) => (
                // Apply the header cell props
                <th {...column.getHeaderProps()} scope="col">
                  {
                    // Render the header
                    column.render("Header")
                  }
                </th>
              ))
            }
          </tr>
        ))
      }
    </thead>
  );
};

const TableBody = ({ getTableBodyProps, rows, prepareRow }) => {
  return (
    <>
      {/* Apply the table body props */}
      <tbody {...getTableBodyProps()}>
        {
          // Loop over the table rows
          rows.map((row) => {
            // Prepare the row for display
            prepareRow(row);
            return (
              // Apply the row props
              <tr {...row.getRowProps()}>
                {
                  // Loop over the rows cells
                  row.cells.map((cell) => {
                    // Apply the cell props
                    return (
                      <td {...cell.getCellProps()}>
                        {
                          // Render the cell contents
                          cell.render("Cell")
                        }
                      </td>
                    );
                  })
                }
              </tr>
            );
          })
        }
      </tbody>
    </>
  );
};

const Table = ({ tableInstance }) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = tableInstance;

  return (
    <>
      {/* apply the table props */}
      <table {...getTableProps()} className="table table-hover table-striped">
        <TableHeader headerGroups={headerGroups} />
        <TableBody
          getTableBodyProps={getTableBodyProps}
          rows={rows}
          prepareRow={prepareRow}
        />
      </table>
    </>
  );
};

const pageState = {
  IDLE: "IDLE",
  LOADING: "LOADING",
  SHOW: "SHOW",
};

const BankStatementUpload = () => {
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState("Choose file");
  const [status, setStatus] = useState(pageState.IDLE);

  // table state
  const [data, setData] = useState([]);
  const columns = useMemo(
    () => [
      {
        Header: "#",
        Cell: (cellData) => <div>{cellData.row.id + 1}</div>,
      },
      {
        Header: "Date",
        accessor: "date", // accessor is the "key" in the data
      },
      {
        Header: "Description",
        accessor: "description",
      },
      {
        Header: "Withdrawals",
        accessor: "withdrawal",
      },
      {
        Header: "Deposit",
        accessor: "deposit",
      },
      {
        Header: "Account balance",
        accessor: "total",
      },
    ],
    []
  );
  const tableInstance = useTable({ columns, data });

  const handleSubmit = (e) => {
    e.preventDefault();
    setFileName("Choose file");
    setStatus(pageState.LOADING);

    // Upload file
    const data = new FormData();
    data.append("file", file);

    axios
      .post(SERVER_URL + "/upload-bank-statement", data, {})
      .then((res) => {
        console.log(res.data);
        setData(res.data.data);
        setStatus(pageState.SHOW);
      })
      .catch((err) => console.log(err));
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
        <Table tableInstance={tableInstance} />
      )}
    </Container>
  );
};

export default BankStatementUpload;
