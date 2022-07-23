//import {useEffect, useState} from "react";

function SomeList(props) {
  let list = props.list.map((el, index) => {
    return <li className="list-group-item" key={index}>{el}</li>
  })
  return (
    <div>
      <ul className="list-group">
        {list}
      </ul>
    </div>
  );
}

export default SomeList;
