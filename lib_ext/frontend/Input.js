import React, { useState } from "react";
import {useBase, useRecords } from '@airtable/blocks/ui';
import {NavLink} from "react-router-dom"
import "./input.css"

function InputOutput() {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [year, setYear] = useState("");
  const [status, setStatus] = useState("");
  const [location, setLocation] = useState("");
  const [author, setAuthor] = useState("");
  const [genre, setGenre] = useState("");
  const base = useBase();
  const table = base.getTable("Test");

  function addNewBook(id, name, year, status, location, author, genre) {
    table.createRecordAsync({
      "ID": id,
      "Name": name,
      "Year": year,
      "Status": status,
      "Location": location,
      "Author": author,
      "Genre": genre
    });
  }

  const handleSaveClick = () => {
    const newId = id;
    const newName = name;
    const newYear = year;
    const newStatus = status;
    const newLocation = location;
    const newAuthor = author;
    const newGenre = genre;
  
    table.createRecordAsync({
      "ID": newId,
      "Name": newName,
      "Year": newYear,
      "Status": newStatus,
      "Location": newLocation,
      "Author": newAuthor,
      "Genre": newGenre
    });
  
    setId("");
    setName("");
    setYear("");
    setStatus("");
    setLocation("");
    setAuthor("");
    setGenre("");
  };
  
  

  return (
    <div>
      <div className="title">
        <h1>Add a Book</h1>
      </div>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <div>
  <label htmlFor="id">ID: </label>
  <input
    id="id"
    type="text"
    value={id}
    onChange={(e) => setId(e.target.value)}
    style={{ width: "150px" }} 
  />
</div>
<div>
  <label htmlFor="name">Name: </label>
  <input
    id="name"
    type="text"
    value={name}
    onChange={(e) => setName(e.target.value)}
    style={{ width: "150px" }} 
  />
</div>
<div>
  <label htmlFor="year">Year: </label>
  <input
    id="year"
    type="text"
    value={year}
    onChange={(e) => setYear(e.target.value)}
    style={{ width: "150px" }} 
  />
</div>
<div>
  <label htmlFor="status">Status: </label>
  <input
    id="status"
    type="text"
    value={status}
    onChange={(e) => setStatus(e.target.value)}
    style={{ width: "150px" }} 
  />
</div>
<div>
  <label htmlFor="location">Location: </label>
  <input
    id="location"
    type="text"
    value={location}
    onChange={(e) => setLocation(e.target.value)}
    style={{ width: "150px" }} 
  />
</div>
<div>
  <label htmlFor="author">Author: </label>
  <input
    id="author"
    type="text"
    value={author}
    onChange={(e) => setAuthor(e.target.value)}
    style={{ width: "150px" }} 
  />
</div>
<div>
  <label htmlFor="genre">Genre: </label>
  <input
    id="genre"
    type="text"
    value={genre}
    onChange={(e) => setGenre(e.target.value)}
    style={{ width: "150px" }} 
  />
</div>
</div>

      <div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
  <button onClick={handleSaveClick}>Add Book</button>
  <button>
    <NavLink to="/mainpage" className="LogInLink">
      Home Page
    </NavLink>
  </button>
</div>

    </div>
  );
}

export default InputOutput;