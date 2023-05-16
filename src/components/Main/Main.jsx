import {useState, useEffect} from 'react';
import List from '../List/List';
import React from 'react';

export default function Main(moreUsers) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(data => data.json())
      .then(res => setUsers(prev => [...prev, ...res]));
  }, [moreUsers]);

  return (
    <main className='container my-5'>
      <List users={users} setUsers={setUsers}/>
    </main>
  );
}