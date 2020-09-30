import React from "react";

const UploadForm = ({ handleSubmit, setFileName, setFile, fileName }) => {
  return (
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
  );
};

export default UploadForm;
