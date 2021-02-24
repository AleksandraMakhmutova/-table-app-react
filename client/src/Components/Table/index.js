import React from 'react';
import PaginationPart from '../PaginationPart';
import { useEffect, useState } from 'react';
import style from "./style.module.css"
import Tbody from './Tbody';
import Input from '../Input';
import TbodyFindUser from './TbodyFindUser';
import SelectUser from '../SelectUser';
import { Button, Col, Container, Row } from 'react-bootstrap';

function Table() {

 const [data, setData]=useState(null);
 const [icon, setIcon] = useState('🔺');
 const [errorSearch, setErrorSearch] = useState('');
 const [findingUser, setFindingUser] = useState('');
 const [selectUserInfo, setSelectUserInfo] = useState([]);
 const [selectPage, setSelectPage]= useState(null)
 const [pageOne, setPageOne] = useState(null)
 
	useEffect(()=>{
		fetch('/downloadFile')
		.then(res => res.json())
		.then(data=> setData(data.sort((a,b)=> a.id - b.id)))	
},
	[])

function addPagination(arr,numP){
 let newArr = []
	for(let i=numP-50; i < numP; i++){
		newArr.push(arr[i])
	}
	if(newArr.length==50){
		setPageOne(newArr)
	}

}

useEffect(()=>{
	if(data && (selectPage >= 50)){
addPagination(data, selectPage)
	}

}, [selectPage])


const handleSortIdUpOrDown = () =>{
	if(pageOne === null){
		if(data[0].id < data[1].id){
	setIcon('🔻')
	return 	setData(prev =>[...prev, prev.sort((a,b)=> b.id - a.id)])
	}else{
			setIcon('🔺')
			return setData(prev =>[...prev, prev.sort((a,b)=> a.id - b.id)])
	}
	}else if(pageOne.length !== 0){
		if(pageOne[0].id < pageOne[1].id){
			setIcon('🔻')
			return 	setPageOne(prev =>[...prev, prev.sort((a,b)=> b.id - a.id)])
			}else{
					setIcon('🔺')
					return setPageOne(prev =>[...prev, prev.sort((a,b)=> a.id - b.id)])
			}
	}
	
}

const searchTextInTable=(searchText)=>{
	let newData = data.map(el=>(Object.values(el)))
  newData.map((el)=>(
	el.filter((userInfo)=>{
			if(userInfo === searchText){
				return setFindingUser(el)
			}
			else if(userInfo !== searchText){
	setErrorSearch('Пользователь не найден')
	setTimeout(() => {
		setErrorSearch('')
	}, 5000);
			}
		})
	))
}

const selectUserHandle=(id)=>{
	setSelectUserInfo(data.filter((el)=> el.id == id))
}

const handleClearFindingUser = ()=>{
	setFindingUser('')
}

const addNewUserFirst = (firstName, lastName, email, phone, streetAddress, city, state, zip, description)=>{
const findMinId = data.sort((a,b)=> a.id - b.id)[0].id - 1; //находит значение минимального id в списке и помещает юзера в начало списка
	const newUser = {
	id: findMinId,
	firstName: `${firstName}`, 
	lastName: `${lastName}`, 
	email: `${email}`, 
	phone: `${phone}`,
  address: {
		streetAddress: `${streetAddress}`,
		city: `${city}`,
		state: `${state}`,
		zip: `${zip}`
	},
	description: `${description}`, 
}
data.unshift(newUser)

}

const handleSelectPage =(numberPage)=>{
setSelectPage(numberPage)
}
	return(
		<>
		<Input searchTextInTable={searchTextInTable} errorSearch={errorSearch} addNewUserFirst={addNewUserFirst}/>

		<Container>
  <Row>
    <Col sm={8}>
		<div className={style.comteiner}>
<div className="shadow p-3 bg-white rounded">
<table className="table table-striped table-hover">
			<thead>
    <tr>
      <th scope="col" onClick={handleSortIdUpOrDown}>{`${icon}`}id </th>
      <th scope="col">First Name</th>
      <th scope="col">Last Name</th>
      <th scope="col">Email</th>
      <th scope="col">Phone</th>
    </tr>
  </thead>

  {findingUser ? 
		<>
    <TbodyFindUser 
		data={findingUser} 
		selectUserHandle={selectUserHandle}/>
		<br/>
		<Button variant="outline-primary" onClick={handleClearFindingUser}>Назад</Button>
		</>
		:
		<Tbody 
		data={pageOne ? pageOne : data} 
		selectUserHandle={selectUserHandle}
		/>
		
	}
</table>
</div>
</div> 
</Col>
  
	<Col sm={4}>{
	selectUserInfo && <SelectUser selectUserInfo={selectUserInfo[0]}/>
}</Col>
  </Row>

</Container>
	<PaginationPart handleSelectPage={handleSelectPage}/>	


</>
	)
}

export default Table
