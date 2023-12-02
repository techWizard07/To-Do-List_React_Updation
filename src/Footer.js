import React from 'react'
function Footer({lengt}) {
    const len=lengt
    return (
        <footer>
            {(len===0)?"To-Do List is empty":
            (len>1) ?   `${len} items are there` : "one item is there!"}
            <h2>All Rights Reserved @2023</h2>
        </footer>
    )
}

export default Footer