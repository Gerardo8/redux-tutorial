import React from 'react';

export const Link = ({
  active,
  children,
  onClick
}) => {
  if (active) {
    return (
      <span>
        {children}
      </span>
    );
  }
  return (
    <button className='btn btn-dark'
      onClick={e => {
        e.preventDefault();
        onClick()
      }}
    >
      {children}
    </button>
  );
}
