import { Col, Container, Row } from "react-bootstrap";
import CardHobbies from "../components/CardHobbies.tsx";
import hobbiesData from "../data/hobbiesData.tsx";
import { BackHome } from "../components/BackHome.tsx";

export default function Hobbies() {
  return (
    <Container fluid className="vw-100 d-flex flex-column">
      <Row className="mx-auto mt-5">
        <h1>My Hobbies</h1>
      </Row>

      {/* Contains the hobbies cards */}
      <Row className="col-12 d-flex flex-column">
        <Col
          xs={11} sm={11} md={12} lg={10} xl={10}
          className="d-flex flex-column flex-sm-column flex-md-row flex-lg-row flex-xl-row justify-content-center mx-auto px-auto">
          {Object.values(hobbiesData).map((hobby) => (
            <CardHobbies
              key={hobby.name}
              hobby={hobby.name}
              image={hobby.image}
              description={hobby.description}
            />
          ))
          }
        </Col>
        
        {/* Back to home component */}
        <Col className="mx-auto my-5 col-5">
          <BackHome/>
        </Col>
      </Row>
    </Container>
  )
}
