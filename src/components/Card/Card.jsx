import React from 'react';

export default function Card({showCard, email, phone, city, zipcode}) {
  return (
    <>
      <div className={`card-body ${showCard ? '' : 'none'}`}>
        E-mail: <span className='cardInfo'>{email}</span>
        <br />
        Телефон: <span className='cardInfo'>{phone}</span>
        <br />
        Город: <span className='cardInfo'>{city},</span> индекс: <span className='cardInfo'>{zipcode}</span>
      </div>
    </>
  );
}
