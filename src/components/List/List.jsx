import React from 'react';

export default function List(users) {
  return (
    <>
      <div className='list-group list-group-flush'>
          {users.map((user) => (
            <a href='#' className='list-group-item list-group-item-action'>
                {user.name}
        </a>
          ))}
      </div>
    </>
  );
}
