import React from "react";

const ListGen = props => {
  return props.list.map(ele => {
    return (
      <div key={props.id} className="item">
        {ele.value}
        <button>Complete</button>
      </div>
    );
  });
};

export default ListGen;
