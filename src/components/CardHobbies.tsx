import { Card } from 'react-bootstrap';

interface HobbiesCardProps {
  hobby: string;
  image:string;
  description:string
}


const CardHobbies = ({ hobby , image , description }: HobbiesCardProps) => {
  return (
    <Card 
      className='m-2 mx-auto'
      style={{width: '18rem'}}>
        <Card.Img className="hobbiesImg" variant="top" src={`${image}`} />
        <Card.Body>
          <Card.Title>{hobby}</Card.Title>
          <Card.Text>
            {description}
          </Card.Text>
        </Card.Body>
    </Card>
  );
}

export default CardHobbies;
