import axios from "axios";
import "./App.css";
import { useState } from "react";

function App() {
  const [data, setData] = useState();
  const [message, setMessage] = useState("");
  const [color, setColor] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("data", data);

    await axios
      .post("/keka/bulkEmployeeRegister", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then(({ data }) => {
        setColor("green");
        setMessage("Success !!!");
        setData();
      })
      .catch(({ response }) => {
        setColor("red");
        setMessage(response.data);
      });
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      <span style={{ color: "black", fontSize: "20px", fontWeight: "600", textAlign: "center" }}>
        Upload CSV File
      </span>
      <form onSubmit={handleSubmit}>
        <div className="label-container">
          <label htmlFor="file" className="custom-file-upload">
            Choose File
          </label>
          <span className="file-name">{data ? data.name : "No file chosen"}</span>
        </div>
        <input
          type="file"
          id="file"
          style={{ display: "none" }}
          onChange={(e) => setData(e.target.files[0])}
        />
        <button type="submit">Submit</button>

        {message && (
          <span
            style={{
              backgroundColor: color,
              padding: "10px",
              color: "white",
              borderRadius: "10px",
            }}
          >
            {message}
          </span>
        )}
      </form>
    </div>
  );
}

export default App;
