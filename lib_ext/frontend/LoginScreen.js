import React, { useState } from 'react';
import { useBase } from '@airtable/blocks/ui';
import { useNavigate } from 'react-router-dom';
import './LoginScreen.css';

function LoginScreen() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const base = useBase();
  const history = useNavigate();
  const navigate = useNavigate();

  async function handleSignIn() {
    try{
      const user = await getUserByName(base, username);
      if (user && user.password === password) {
        navigate('/mainpage');
      } else {
        setError('Invalid username or password');
      }
    } catch (err) {
      setError('Something went wrong, please try again later');
    }
  }

  async function getUserByName(base, username) {
    const usernamesTable = base.getTableByName('Usernames');
    const queryResult = await usernamesTable.selectRecordsAsync({
      filterByFormula: `Name = '${username}'`,
      maxRecords: 1,
    });
    const record = queryResult.records[0];
    if (!record) {
      return null;
    }
    const passwordsTable = base.getTableByName('Passwords');
    const passwordQueryResult = await passwordsTable.selectRecordsAsync({
      filterByFormula: `Name = '${record.getCellValueAsString('Usernames')}'`,
      maxRecords: 1,
    });
    const passwordRecord = passwordQueryResult.records[0];
    if (!passwordRecord) {
      return null;
    }
    return {
      username: record.getCellValueAsString('Name'),
      password: passwordRecord.getCellValueAsString('Passwords'),
    };
  }

  return (
    <div className="LoginContainer">
  <div className="LoginTitle">EASYSORT</div>
  <div className="LoginSubtitle">
    The final solution for every librarian's favorite problem: too many books!
  </div>
  <div className="LoginSubtitle">
  Lib ID: Spy12150      Password: abcd
    </div>
      <form>
        <label>
          Library ID:
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <br />
        {error && <div className="error">{error}</div>}
        <button type="button" onClick={handleSignIn} className="LogInLink">
          Sign In
        </button>
      </form>
    </div>
  );
}

export default LoginScreen;
