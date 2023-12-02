import React from 'react'
import colorNames from 'colornames'
function Input({colorValue,setColorValue,setHexValue,isDarkText,setIsDarkText}) {
  return (
    <div>
        <form onSubmit={(e)=>e.preventDefault()}>
            <label htmlFor="label">Add Color Name</label>
            <input type="text" 
                autoFocus
                placeholder='Enter Your Color'
                require
                value={colorValue}
                onChange={(e)=>{
                    setColorValue(e.target.value)
                    setHexValue(colorNames(e.target.value))
                }}
            />
            <button type="button"
                onClick={()=>setIsDarkText(!isDarkText)}
            >Toggle Text Color</button>
        </form>
    </div>
  )
}

export default Input