import React from 'react';

function SelectUser({selectUserInfo}){
	return(
 <>
{
selectUserInfo && 
<div>
Выбран пользователь <b>{selectUserInfo.firstName}{"  "}{selectUserInfo.lastName}</b>
Описание:
<textarea>
{selectUserInfo.description}
</textarea>
Адрес проживания: <b>{selectUserInfo.address.streetAddress}</b>
Город: <b>{selectUserInfo.address.city}</b>
Провинция/штат: <b>{selectUserInfo.address.state}</b>
Индекс: <b>{selectUserInfo.address.zip}</b>
</div>
}

 </>
	)
}

export default SelectUser
