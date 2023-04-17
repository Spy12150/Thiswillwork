import React, { useState } from "react";

function InputOutput() {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [input3, setInput3] = useState("");
  
  const base= useBase()
  const table= base.getTable ("Books") // books table
  const records = useRecords(table) // all records

function addNewBook(name, value, status){
  table.createRecordAsync({
    "Name": name,
    "Value": value,
    "Status": status
  })
}
  return(
    <div>
      <div className="title">
        <h1>Input Output Component</h1>
      </div>
      <div className="sign-out-button">
        <button>Sign Out</button>
      </div>
      <div>
        <label htmlFor="input1">Input 1:</label>
        <input
          id="input1"
          type="text"
          value={input1}
          onChange={(e) => setInput1(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="input2">Input 2:</label>
        <input
          id="input2"
          type="text"
          value={input2}
          onChange={(e) => setInput2(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="input3">Input 3:</label>
        <input
          id="input3"
          type="text"
          value={input3}
          onChange={(e) => setInput3(e.target.value)}
        />
      </div>
      <div>
        <h3>Output 1:</h3>
        <div>{input1}</div>
      </div>
      <div>
        <h3>Output 2:</h3>
        <div>{input2}</div>
      </div>
      <div>
        <h3>Output 3:</h3>
        <div>{input3}</div>
      </div>
    </div>

   <button onClick={() => addNewBook(input1,input2,input3)}>
        Submit
      </button>
  );
}

export default InputOutput;
