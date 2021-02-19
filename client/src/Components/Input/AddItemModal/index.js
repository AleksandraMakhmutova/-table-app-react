import { Button, Col, Form, Modal, Row } from 'react-bootstrap';


function AddItemModal(props) {
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
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Centered Modal</h4>
        <Form>
  <Row>
    <Col>
      <Form.Control placeholder="First name" />
    </Col>
    <Col>
      <Form.Control placeholder="Last name" />
    </Col>
  </Row>
	<Form.Group controlId="formGroupEmail">
    <Form.Label></Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
  </Form.Group>
  <Form.Group controlId="formGroupPassword">
    <Form.Label></Form.Label>
    <Form.Control type="text" placeholder="Phone" />
  </Form.Group>
</Form>
      </Modal.Body>
      <Modal.Footer>
			 <Button variant="success">+ Добавить</Button>{' '}
        <Button onClick={props.onHide}>Отмена</Button>
      </Modal.Footer>
    </Modal>
</>
	)
}

export default AddItemModal

