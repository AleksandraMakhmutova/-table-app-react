import { useState } from 'react';
import { Button, Col, Form, Modal, Row } from 'react-bootstrap';


function AddItemModal(props) {
const [statusBtn, setStatusBtn] = useState(true);

const [inputs, setInputs] = useState({
	firstName: '',
	lastName: '',
	email: '',
	phone: '',
	description: '',
})

const [address, setAddress] = useState({
	streetAddress: '',
	city: '',
	state: '',
	zip: ''
})

const {firstName, lastName, email, phone, description} = inputs;
const {streetAddress, city, state, zip } = address;

const handleChange= ({ target: { name, value } }) =>{
	setInputs({
		...inputs,
		[name]: value
	})
	setAddress({
		...address,
		[name]:value
	})
	if(firstName && lastName && email && phone && streetAddress && city &&  state &&  zip &&  description){
		setStatusBtn(false)
	}
}


const handleSubmit = () =>{
	props.addNewUser(firstName, lastName, email, phone, streetAddress, city, state, zip, description)
	setInputs({
		firstName: '',
		lastName: '',
		email: '',
		phone: '',
		description: '',
	})
	setAddress({
		streetAddress: '',
		city: '',
		state: '',
		zip: ''
	})
 props.onHide()
setStatusBtn(true)
}

	return (
		<>
 <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">
          Добавить пользователя в список
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Введите данные</h4>
        <Form
				>
  <Row>
    <Col>
      <Form.Control placeholder="First name" onChange={handleChange} name="firstName" value={firstName}/>
    </Col>
    <Col>
      <Form.Control placeholder="Last name" onChange={handleChange} name="lastName" value={lastName}/>
    </Col>
  </Row>
	<Row className='mt-2'>
    <Col>
      <Form.Control placeholder="Street address" onChange={handleChange} name="streetAddress" value={streetAddress}/>
    </Col>
    <Col>
      <Form.Control placeholder="Zip" onChange={handleChange} name="zip" value={zip} />
    </Col>
		<Col>
      <Form.Control placeholder="City" onChange={handleChange} name="city" value={city} />
    </Col>
		<Col>
      <Form.Control placeholder="State" onChange={handleChange} name="state" value={state} />
    </Col>
  </Row>
	<Form.Group controlId="formGroupEmail">
    <Form.Label></Form.Label>
    <Form.Control type="email" name="email" placeholder="Enter email" onChange={handleChange} value={email}/>
  </Form.Group>
  <Form.Group controlId="formGroupPassword">
    <Form.Label></Form.Label>
    <Form.Control type="text" placeholder="Phone"  name="phone" onChange={handleChange} value={phone}/>
  </Form.Group>
	<Form.Group controlId="formGroupPassword">
    <Form.Label></Form.Label>
    <Form.Control type="text" placeholder="Description"  name="description" onChange={handleChange} value={description}/>
  </Form.Group>
	
	
</Form>
      </Modal.Body>
      <Modal.Footer>
			{
				statusBtn ? <Button variant="success" disabled>+ Добавить</Button>:
				<Button variant="success"  onClick={handleSubmit}>+ Добавить</Button>
			}
			 {' '}
        <Button onClick={props.onHide}>Отмена</Button>
      </Modal.Footer>
    </Modal>
</>
	)
}

export default AddItemModal

