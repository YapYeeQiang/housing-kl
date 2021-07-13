import { Link } from 'react-router-dom';
import { Card, Col, Button } from 'react-bootstrap';
import './HouseCard.css';

function HouseCard({ id, house, image }) {
	return (
		<Col id={id} sm={4} className='houseCard__col'>
			<Card className='houseCard__card'>
				<Card.Img variant='top' src={image} width={200} height={300} />
				<Card.Body>
					<Card.Title>{house.fields.location}</Card.Title>
					<Card.Text>{house.fields.propertyType}</Card.Text>
					<Card.Text>
						RM{' '}
						{house.fields.price.toString().replace(/(\d)(?=(\d{3})+$)/g, '$1,')}
					</Card.Text>
				</Card.Body>
				<Link to={`/house/${id + 1}`} className='houseCard__link'>
					<Button variant='dark'>Profile</Button>
				</Link>
			</Card>
		</Col>
	);
}

export default HouseCard;
