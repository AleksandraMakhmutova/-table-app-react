import React from 'react';
// import Pagination from '../Pagination';
import { useEffect, useState } from 'react';
import style from "./style.module.css"
import Tbody from './Tbody';
import Input from '../Input';
import TbodyFindUser from './TbodyFindUser';


function Table() {
	const [data, setData]=useState(null)
	const [icon, setIcon] = useState('🔺')
 const [errorSearch, setErrorSearch] = useState('')
 const [findingUser, setFindingUser] = useState('')

	useEffect(()=>{
		fetch('http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}')
		.then(res=> res.json())
		.then(data=> setData(data.sort((a,b)=> a.id - b.id)))
	},
	[])
const handleSortIdUpOrDown = () =>{
	if(data[0].id < data[1].id){
	setIcon('🔻')
	return 	setData(prev =>[...prev, prev.sort((a,b)=> b.id - a.id)])
	}else{
			setIcon('🔺')
			return setData(prev =>[...prev, prev.sort((a,b)=> a.id - b.id)])
	}
}


let newData
function searchTextInTable(searchText){
	console.log('searchText',searchText);
	newData = data.map(el=>(Object.values(el)))

 newData.map(el=>{
		el.filter((userInfo)=>{
			if(userInfo == searchText){
				return setFindingUser(el)
			}
			else if(userInfo !== searchText){
	console.log('searchText',searchText);
	setErrorSearch('Пользователь не найден')
	setTimeout(() => {
		setErrorSearch('')
	}, 5000);
			}
		})
	})

	console.log(findingUser);
}
console.log(errorSearch);
	return(
		<>
		<Input searchTextInTable={searchTextInTable} 
		errorSearch={errorSearch}/>
		<div className={style.comteiner}>
<div className="shadow p-3 mt-5 bg-white rounded ">
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
    <TbodyFindUser data={findingUser}/>:
		<Tbody data={data}/>
	}
	
	
</table>


</div>

</div>
{/* <Pagination /> */}
</>
	)
}

export default Table
