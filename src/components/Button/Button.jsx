import React from 'react';
import css from './Button.module.css';

export function Button({ onClick }) {
  return (
    <button type="button" onClick={onClick} className={css.Button}>
      Load more
    </button>
  );
}
