import React from 'react'
import {v4 as uuid4} from 'uuid'

function Tbody({data, selectUserHandle}) {

const handleSelectUser = (e) =>{
selectUserHandle(e.currentTarget.id)
}
	return (
	<>
	<tbody>
		{
			data && data.map(el=>(
				<tr key={uuid4()} id={el.id} onClick={handleSelectUser} >
				<th scope="row">{el.id}</th>
				<td>{el.firstName}</td>
				<td>{el.lastName}</td>
				<td>{el.email}</td>
				<td>{el.phone}</td>
				</tr>
			))
		}
		</tbody>
</>

	)
}

export default Tbody
