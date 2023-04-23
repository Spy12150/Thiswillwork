import React, { useState } from 'react';
import { Button, useBase, useRecords } from '@airtable/blocks/ui';
import {NavLink} from "react-router-dom"
import "./Rebalance.css"
//gg + league sucks + ratio

function Rebalancer() {

    const base = useBase();
    const table = base.getTable("Books");
    const records = useRecords(table);
    
  const [message, setMessage] = useState('');

  const handleClick = async () => {
    try {
      const idleBooks = await 
      
        table.select({
        filterByFormula: "Status = 'Idle'",
      }).all();

      const idleBooksByLibrary = {};
      idleBooks.forEach((book) => {
        const library = book.get('Library');
        idleBooksByLibrary[library] = (idleBooksByLibrary[library] || 0) + 1;
      });

      const totalIdleBooks = idleBooks.length;
      const numLibraries = Object.keys(idleBooksByLibrary).length;
      const avgIdleBooksPerLibrary = Math.floor(totalIdleBooks / numLibraries);

      Object.keys(idleBooksByLibrary).forEach((library) => {
        const numIdleBooks = idleBooksByLibrary[library];
        if (numIdleBooks > avgIdleBooksPerLibrary) {
          const booksToMove = numIdleBooks - avgIdleBooksPerLibrary;
          const otherLibraries = Object.keys(idleBooksByLibrary).filter(
            (lib) => lib !== library
          );
          otherLibraries.forEach((otherLibrary) => {
            const numOtherIdleBooks = idleBooksByLibrary[otherLibrary];
            if (numOtherIdleBooks < avgIdleBooksPerLibrary) {
              const numBooksToMove = Math.min(
                booksToMove,
                avgIdleBooksPerLibrary - numOtherIdleBooks
              );
              const booksToUpdate = idleBooks
                .filter((book) => book.get('Library') === library)
                .slice(0, numBooksToMove);
              booksToUpdate.forEach((book) => {
                book.update({
                  Library: otherLibrary,
                  Status: 'Borrowed',
                });
              });
              booksToMove -= numBooksToMove;
            }
          });
        }
      });

      setMessage('Books rebalanced successfully!');
    } catch (error) {
      setMessage(`Error: ${error.message}`);
    }
  };

  return (
    <div>
      <div>
      <button onClick={handleClick}>Rebalance Books</button>
      <p>{message}</p>
      </div>
      <div>
        <button className="ReturnFromRebalanceButton">
          <NavLink to="/mainpage" className="ReturnFromRebalance">
              Main Page
          </NavLink> 
        </button>
      </div>
      </div>
  );
}

export default Rebalancer;
