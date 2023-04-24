import React, { useState } from "react";
import { Button, useBase, useRecords } from '@airtable/blocks/ui';
import {NavLink} from "react-router-dom"
import "./remove.css"

function RemoveRecord() {
  const [id, setId] = useState("");

  const base = useBase();
  const table = base.getTable("Test");
  const records = useRecords(table);
  console.log(records)

  const handleRemoveClick = () => {
    const record = records.find((r) => r.getCellValue("ID") === id);

    if (record) {
      table.deleteRecordAsync(record);
    }

    setId("");
  };

  return (
    <div className="RemoveContainer">
      <div className="RemoveTitle">
        <h1> Remove a Book</h1>
      </div>
      <div>
        <label className="ReturnID" htmlFor="ReturnId">ID: </label>
        <input
          id="ReturnId"
          type="text"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
      </div>
      <Button className="RemoveBookButton" onClick={handleRemoveClick}  >Remove Book</Button>
      <div className="MainPageButton">
        <button>
          <NavLink to="/mainpage" className="LogInLink">
            Main Page
          </NavLink>
        </button>
      </div>
    </div>
  );
}

export default RemoveRecord;
