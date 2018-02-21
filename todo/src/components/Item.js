import React from 'react';

const Item = ({ onClick, completed, text }) => {
  return (
    <li>
      {text}
    </li>
  );
};

export default Item;
