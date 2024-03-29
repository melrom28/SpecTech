import { Button, Card, Col, Container, Form, InputGroup, Row } from "react-bootstrap";


export default function Home() {
   
  return (
    <Container fluid className="vw-100">
      
      <Row className="d-flex justify-content-center">
        <Col xs={12} md={10} lg={6} xl={6}> 
                
                 <h1 className="text-center my-4">Digital Transformation</h1>
                 {/* ================Input================== */}
                <InputGroup className="mb-4">
                <InputGroup.Text>Created by:</InputGroup.Text>
                <Form.Control
                    aria-describedby="inputGroup-sizing-sm"
                    placeholder="Full Name"
                />
                </InputGroup>

                {/* ================Calculator and JSON buttons================== */}
                <div className="d-flex justify-content-between mb-4">
                  <Button className="col-5" variant="outline-danger" href="/calculator">Calculator</Button>
                  <Button className="col-5" variant="outline-danger" href="/json">JSON</Button>
                </div>

                {/* ================Hobbies================== */}
                <Card className="card">
                  <Card.Body className="card">
                    <Card.Title>My Hobbies</Card.Title>
                    <Card.Text>
                      Hi! My name is Rommel Esteves. By clicking the button below, you will find interesting things about me.
                    </Card.Text>
                    <Button variant="primary" href="/hobbies">Get to know me</Button>
                  </Card.Body>
              </Card>
        </Col>
      </Row>
    </Container>
  )
}
