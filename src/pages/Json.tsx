import React, { useEffect, useState } from "react";
import User from "../components/User";
import { Col, Container, Row, Stack } from "react-bootstrap";
import { BackHome } from "../components/BackHome";

interface UserData {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
  };
}

const Json: React.FC = () => {
  const [data, setData] = useState<UserData[]>([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then((data: UserData[]) => setData(data));
  }, []);

  return (
    <Container fluid className="d-flex text-center flex-column vw-100">
        {/* THIS IS WHERE TITLE SHOWS */}
        <Stack className="my-5 pt-5">
          <h1>USER INFORMATION</h1>
        </Stack>


        {/* THIS IS WHERE USER CARDS ARE DISPLAYED */}
        <Row className="mx-auto justify-content-center col-11 mb-3">

          {/* THIS HOLDS EACH CARD THAT WAS MAPPED */}
          {data.map(user => (
          <Col className="json_Cards text-start m-2 p-3"
            xs={12} sm={12} md={5} lg={3} xl={3}
          >
            <User key={user.id} user={user} />
          </Col>
        ))}
        </Row>
        <div className="col-8 mx-auto mb-5">
          <BackHome/>
        </div>
    </Container>
  );
};

export default Json;