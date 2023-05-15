import {useState, useEffect} from 'react';
import List from '../List/List';
import Card from '../Card/Card';
import React from 'react';
// import {useLocalStorage} from '../../hooks/useLS';

export default function Main(moreUsers) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(data => data.json())
      .then(res => {
        console.log(res);
        setUsers(prev => [...prev, ...res]);
      });
  }, [moreUsers]);

  // function handleSubmit(event) {
  //   event.preventDefault();
  //   const post = {
  //     task,
  //     id: Date.now(),
  //     taskStatus: false,
  //   };
  //   // setToDoList(prev => [...prev, post]);
  //   setTask('');
  // }

  return (
    <main className='container my-5 py-5'>
      {/* <List users={users}/> */}
      <div className='list-group list-group-flush'>
        {users.map((user, i) => (
          <a
            key={i}
            href='#'
            className='list-group-item list-group-item-action'
            // onClick={() => (
            //   <div key={++id} className='card-body'>
            //     <h5 className='card-title'>E-mail: {user.email}</h5>
            //     <p className='card-text'>Телефон: {user.phone}</p>
            //   </div>
            // )}
            >
            {user.name}
          </a>
        ))}
        
      </div>

      {/* <div key={id} className='card-body'>
        <h5 className='card-title'>E-mail: {user.email}</h5>
        <p className='card-text'>Телефон: {user.phone}</p>
      </div> */}
      {/* <Task task={task} setTask={setTask} handleSubmit={handleSubmit} />
      <ToDoList toDoList={toDoList} setToDoList={setToDoList} /> */}
    </main>
  );
}
