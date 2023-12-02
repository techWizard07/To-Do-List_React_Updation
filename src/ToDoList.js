import React, { useEffect } from 'react'
import Header from './Header'
import Footer from './Footer'
import Content from './Content'
import {useState} from 'react'
import AddItem from './AddItem'
import SearchItem from './SearchItem'
function ToDoList() {
        const API_URL="http://localhost:3500/iteems"
        const [items, setItems] = useState([]);
        const [newItem,setNewItem]= useState('')
        const [search,setSearch]=useState('')
        const [fetchError,setFetchError]=useState(null)
        const [isLoading,setIsLoading]=useState(true)

        useEffect(()=>{
          const fetchItems = async()=>{
            try{
              const response = await fetch (API_URL)
              if(!response.ok) throw Error("404 Your data is missing")
              console.log(response)
              const listItems = await response.json()
              console.log(listItems)
              setFetchError(null)
              setItems(listItems)
            }
            catch(e){
              setFetchError(e.message)
            }
            finally{
              setIsLoading(false)
            }
          }
          setTimeout(()=>(async ()=>await fetchItems())(),2000)
        },[])

        const addItem=(item)=>{
          const id = items.length ? items[items.length-1].id+1 : 1
          const addNewItem = {id,checked:false,item}
          const listItems=[...items,addNewItem]
          setItems(listItems)
          localStorage.setItem('todo-list',JSON.stringify(listItems))
        }
       
        const handleSubmit = (e)=>{
          e.preventDefault()
          if(!newItem) return
          console.log(`${newItem} is added`);
          setNewItem('')
          addItem(newItem)
        }
      const handleCheck = (id) => {
        const listItems = items.map((item) => item.id === id ? { ...item, checked: !item.checked } : item)
        setItems(listItems)
      }
      const deleteItem = (id) => {
        const listItems = items.filter((item) => item.id !==id )
        setItems(listItems)
        const foundItem = items.find(item => item.id === id);
        console.log(`${foundItem.item} is deleted`)
      }
      const len=items.length
    return (
        <div className="ToDo"> 
            <Header />
            <AddItem
            handleSubmit={handleSubmit}
            newItem={newItem}
            setNewItem={setNewItem}
            />
            <SearchItem search={search} setSearch={setSearch}/>
            <main>
              {isLoading && <p>Loading Items...&#128552;</p>}
            {fetchError && <p>{`Error:${fetchError}`}&#128543;</p>}
            {!isLoading && !fetchError &&  <Content items={items.filter(item=>((item.item).toLowerCase()).includes(search.toLowerCase()))}
                setItems={setItems}
                handleCheck={handleCheck}
                deleteItem={deleteItem}
            />}
            </main>
            <Footer lengt={len}/>
        </div>
    )
}

export default ToDoList