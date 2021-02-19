import React, { useState } from "react";
import AddItemModal from "./AddItemModal";
import {Button} from "react-bootstrap"

function Input(params) {

const [modalShow, setModalShow] = useState(false);

return (

<form>
  <div className="mb-3">
    <label  className="form-label">Поиск</label>
    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">Поиск по ключевым словам</div>
	</div>
	<button type="submit" className="btn btn-primary">Найти</button>

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
