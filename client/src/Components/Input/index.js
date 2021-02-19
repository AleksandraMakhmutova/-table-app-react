import React, { useState } from "react";
import AddItemModal from "./AddItemModal";
import {Button} from "react-bootstrap"

function Input({searchTextInTable, errorSearch}) {
console.log('errorSearch', errorSearch);
const [modalShow, setModalShow] = useState(false);
const [searchText, setSearchText] = useState('')


const handleChange = (e)=>{
	setSearchText(e.target.value)
}

const searchTextHandle = (e)=>{
	e.preventDefault()
	searchTextInTable(searchText)
	setSearchText('')
}

return (

<form >
  <div className="mb-1">
    <label  className="form-label">Поиск</label>
    <input type="text" className="form-control" onChange={handleChange} value={searchText}/>
    <div id="emailHelp" className="form-text">Поиск по ключевым словам <strong>{errorSearch && errorSearch}</strong>
		</div>
    
		
	</div>
	<button type="submit" onClick={searchTextHandle} className="btn btn-primary">Найти</button>

  <Button className='m-1' variant="primary" onClick={() => setModalShow(true)}>
        Добавить в список
  </Button>
	<AddItemModal 
	  show={modalShow}
		onHide={()=>setModalShow(false)}
	/>
</form>
	)
}

export default Input
