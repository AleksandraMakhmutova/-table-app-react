import React from 'react';
import Pagination from '../Pagination';
import { useEffect, useState } from 'react';


function Table() {
	const [data, setData]=useState(null)
	const [icon, setIcon] = useState('🔺')

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

	return(
<div className="shadow p-3 mt-5 bg-white rounded">

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
  <tbody>
	{
		data && data.map(el=>(
			<tr>
      <th scope="row">{el.id}</th>
      <td>{el.firstName}</td>
      <td>{el.lastName}</td>
      <td>{el.email}</td>
      <td>{el.phone}</td>
			</tr>
		))
	}
  </tbody>
</table>

<Pagination/>
</div>
	)
}

export default Table
