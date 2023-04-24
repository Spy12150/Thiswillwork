import React, { useState } from 'react';
import { useBase, useRecords } from '@airtable/blocks/ui';
import { Button } from '@airtable/blocks/ui';
import { NavLink } from 'react-router-dom';

function Rebalancer() {
  const base = useBase();
  const testTable = base.getTableByName('Test');
  const records = useRecords(testTable);
  const librariesTable = base.getTableByName('Libraries');
  const libraries = useRecords(librariesTable).map((library) => ({
    id: library.id,
    name: library.getCellValue('Name'),
    libraryId: library.getCellValue('ID'),
  }));
  const [messages, setMessages] = useState([]);
  const [resetMessage, setResetMessage] = useState('');

  function handleRebalanceClick() {
    const idleBooks = records.filter((record) => record.getCellValue('Status') === 'Idle');
  
    const newMessages = idleBooks.map((book, index) => {
      const bookName = book.getCellValue('Name');
      const bookId = book.getCellValue('ID');
      const libraryIndex = index % libraries.length;
      const library = libraries[libraryIndex];
      const libraryId = library.libraryId;
  
      const bookToUpdate = records.find(
        (record) => record.getCellValue('Name') === bookName && record.getCellValue('Status') === 'Idle',
      );
      if (bookToUpdate) {
        testTable.updateRecordAsync(bookToUpdate, {
          Status: 'Sent',
          Location: library.name,
        });
  
        return `Book ${bookId} (${bookName}) has been sent to ${libraryId} (${library.name}) .`;
      }
      return '';
    });
    setResetMessage(''); 
    setMessages(newMessages);
  }
  

  function handleResetClick() {
    records.forEach((record) => {
      if (record.getCellValue('Status') === 'Sent') {
        testTable.updateRecordAsync(record, {
          Status: 'Idle',
        });
      }
    });
    setMessages([]);
    setResetMessage('The sent books have arrived at the libraries.');
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div className="RemoveTitle">
        <h1 style={{ textAlign: 'center' }}> Book Rebalancing</h1>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Button onClick={handleRebalanceClick}>Rebalance Idle Books</Button>
        <Button onClick={handleResetClick}>Reset Sent Books</Button>
      </div>
      <p style={{ textAlign: 'center' }}>Book Status Update:</p>
      {messages.length > 0 && (
        <ul style={{ textAlign: 'center' }}>
          {messages.map((message, index) => (
            <li key={index}>{message}</li>
          ))}
        </ul>
      )}
      {resetMessage && <p style={{ textAlign: 'center' }}>{resetMessage}</p>}
      <button style={{ marginTop: '20px' }}>
        <NavLink to="/mainpage" className="LogInLink">
          Main Page
        </NavLink>
      </button>
    </div>
  );
}

export default Rebalancer;
