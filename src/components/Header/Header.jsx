// import {useState} from 'react';
import React from 'react';

export default function Header({moreUsers, setMoreUsers}) {

  return (
    <>
        <nav className='navbar fixed-top'>
          <div className='container-fluid'>
            <span className='navbar-brand'>Список клиентов</span>
            <button className='btn btn-light' onClick={() => setMoreUsers(moreUsers+1)}>
              Добавить клиентов
            </button>
          </div>
        </nav>
    </>
  );
}
