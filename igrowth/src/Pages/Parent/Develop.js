<<<<<<< SathyaHemakanththi
=======
import React, { useState, useEffect } from "react";
import "./develop.css";

const Develop = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data from the API and update the state
    fetch("http://localhost:8081/development_activities")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.log(err));
  }, []);

  const handleRadioChange = (event, index) => {
    const newData = [...data];
    newData[index].activity_status = event.target.value;
    setData(newData);
  };

  const handleSubmit = () => {
    // Send the updated data to the server
    fetch("http://localhost:8081/update_development_activities", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((response) => { 
        console.log(response);
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="table_card">
      <table className="table-top">
        <thead>
          <tr>
            <th className="id-width" >ID</th>
            <th className="name-width">Name</th>
            <th className="status-width">Status</th>
          </tr>
        </thead>
        <tbody>
          {data.map((d, i) => (
            <tr key={i}>
              <td>{d.activity_id}</td>
              <td>{d.activity_name}</td>
              <td className="table-input">
                <input
                  type="radio"
                  value="Yes"
                  checked={d.activity_status === "Yes"}
                  onChange={(e) => handleRadioChange(e, i)}
                />
                Yes
                <input
                  type="radio"
                  value="No"
                  className="input-no"
                  checked={d.activity_status === "No"}
                  onChange={(e) => handleRadioChange(e, i)}
                />
                No
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className="submit_btn" onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default Develop; 
>>>>>>> main
