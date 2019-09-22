import React from "react";

const ListGen = props => {
  return props.list.map((ele, i) => {
    return (
      <div key={i} className="item">
        {ele.value}
        <button onClick={() => props.complete(i)}>Complete</button>
      </div>
    );
  });
};

export default ListGen;
