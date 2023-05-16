import React from 'react';

export default function Footer() {
  return (
    <footer className='fixed-bottom'>
      <div className='text-center p-3 footer'>
        © 2023 {' '}
        <a
          className='text-dark'
          href='https://github.com/TomaTem'
          target='_blank'
          rel='noreferrer'>
          TomaTem
        </a>
      </div>
    </footer>
  );
}
