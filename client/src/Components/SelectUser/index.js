import React from 'react';
import { Card, Form} from 'react-bootstrap';

function SelectUser({selectUserInfo}){
	return(
 <>
   <br />
{
selectUserInfo && <Card border="info" style={{ weight: '18rem' }} className='mb-2'>
	<Card.Header>Выбран пользователь: <b>{selectUserInfo.firstName}{"  "}{selectUserInfo.lastName}</b></Card.Header>
	<Card.Body>
		<Card.Text>
		<h6>Описание:</h6>
<Form.Control as="textarea" rows={3}>{selectUserInfo.description}</Form.Control>
<h6>Адрес проживания: <b>{selectUserInfo.address.streetAddress}</b></h6>
<h6>Город: <b> {selectUserInfo.address.city}</b></h6>
<h6>Провинция/штат: <b> {selectUserInfo.address.state}</b></h6>
<h6>Индекс:<b> {selectUserInfo.address.zip}</b> </h6>
		</Card.Text>
	</Card.Body>
</Card>
}

 </>
	)
}

export default SelectUser
