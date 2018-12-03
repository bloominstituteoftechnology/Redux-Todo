import React from 'react';

const Tab = ({ active, children, onClick }) => {
  return (
    <button onClick={onClick} disabled={active} style={{ marginLeft: '4px' }}>
      {children}
    </button>
  );
};

export default Tab;
