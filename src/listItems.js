import React from 'react'

import { FaTrash } from "react-icons/fa"
function ListItems({items,handleCheck,deleteItem}) {
  return (
    <ul>
        {items.map((item) =>
          <li className="item" key={item.id}>
            <input type="checkbox" checked={item.checked} onChange={() => handleCheck(item.id)} />
            <label 
              style={(item.checked)? {textDecoration:"line-through"}:null}
            onDoubleClick={()=>handleCheck(item.id)}>{item.item}</label>
            <FaTrash
              role="button"
              tabIndex="0" onClick={() => deleteItem(item.id)} />
          </li>
        )}
      </ul>
  )
}

export default ListItems