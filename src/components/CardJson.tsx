import Card from 'react-bootstrap/Card';

interface CardProps {
  name: string;
  userName: string;
  email: string;
  street: string;
  suite: string;
  city: string;
  zipCode: string;
}


function CardJson({ name , userName , email , street ,suite , city , zipCode } : CardProps) {

  return (
    <Card className='json_Card border'>
      <Card.Header as="h5">
          <p className='name'>{name}</p>
          <p className='userName'>{userName}</p>
          <p className='email'>{email}</p>
      </Card.Header>
      <Card.Body>
        <Card.Text className='jsonCardBody'>
          <p>{street}</p>
          <p>{suite}</p>
          <p>{city}</p>
          <p>{zipCode}</p>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default CardJson;