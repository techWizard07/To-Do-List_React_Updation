import React from 'react'
import {FaPlus} from 'react-icons/fa'
function AddItem({handleSubmit,newItem,setNewItem}) {
  return (
    <div>
        <form className="addForm" onSubmit={handleSubmit}>
            <label htmlFor="addItem">Add Item</label>
            <input type="text" 
            require
            autoFocus
            id="addItem" 
            placeholder='Add Item'
            value={newItem}
            onChange={(e)=>setNewItem(e.target.value)}
            />
            <button
            type="Submit"
            >
                <FaPlus/>
            </button>

        </form>
    </div>
  )
}

export default AddItem