import React from 'react'
import { v4 as uuid } from 'uuid';


function TbodyFindUser({data, selectUserHandle}) {
	const handleSelectUser = (e) =>{
		selectUserHandle(e.currentTarget.id)
		}

	return (

	<>
	<tbody>
  
		{
			data && 
       <tr key={`${uuid()}`}  id={data[0]} onClick={handleSelectUser}>
				<th scope="row">{data[0]}</th>
				<td>{data[1]}</td>
				<td>{data[2]}</td>
				<td>{data[3]}</td>
				<td>{data[4]}</td>
				</tr>
		}
		</tbody>
</>

	)
}

export default TbodyFindUser
