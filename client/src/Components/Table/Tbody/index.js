import React from 'react'
import { v4 as uuid } from 'uuid';
function Tbody({data}) {


	return (

	<>
	<tbody>
  
		{
			data && data.map(el=>(
				<tr key={`${uuid()}`}>
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
