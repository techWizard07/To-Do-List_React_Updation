import React from 'react'
import ListItems from './listItems'

function Content({items,handleCheck,deleteItem}) {
  return (
    <>
      {(items.length) ?<ListItems
      items={items}
      handleCheck={handleCheck}
      deleteItem={deleteItem}/>
         : "Your List is Empty"
      }
      
    </>
  )
}

export default Content