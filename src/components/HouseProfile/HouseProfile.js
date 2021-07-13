import { useParams } from 'react-router-dom';
import { Figure, Badge, Carousel } from 'react-bootstrap';
import './HouseProfile.css';

function HouseProfile({ houses, houseImages }) {
	const { id } = useParams();
	const house = houses[id - 1]?.fields;
	const houseImage = `https://${houseImages[id - 1]?.fields?.file?.url}`;

	return (
		<div className='profile'>
			<div>
				<section>
					<h1>
						{house?.location}{' '}
						<Badge className='profile__price'>
							RM {house?.price.toString().replace(/(\d)(?=(\d{3})+$)/g, '$1,')}
						</Badge>
					</h1>
					<br />
					<Figure className='profile__image'>
						<Figure.Image width={800} alt={house?.location} src={houseImage} />
						<Figure.Caption>{house?.location}</Figure.Caption>
					</Figure>
				</section>
				<section>
					<h2>
						{house?.propertyType}{' '}
						<Badge
							className={
								house?.furnishing === 'Partly Furnished'
									? 'status__partly'
									: 'status__fully'
							}>
							{house?.furnishing}
						</Badge>
					</h2>
					<h6>{house?.size}</h6>
				</section>
				<section>
					<Carousel>
						<Carousel.Item className='carousel__wrap'>
							<img
								className='carousel__image'
								src='https://images.unsplash.com/photo-1586105251261-72a756497a11?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YmVkcm9vbXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
								alt='Rooms'
								width={900}
								height={300}
							/>
							<h3>{house?.rooms} Rooms</h3>
						</Carousel.Item>

						<Carousel.Item className='carousel__wrap'>
							<img
								className='carousel__image'
								src='https://images.unsplash.com/photo-1604709177225-055f99402ea3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8YmF0aHJvb218ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
								alt='Bathrooms'
								width={900}
								height={300}
							/>
							<h3>{house?.bathrooms} Bathrooms</h3>
						</Carousel.Item>

						{house?.carParks > 1 ? (
							<Carousel.Item className='carousel__wrap'>
								<img
									className='carousel__image'
									src='https://images.unsplash.com/photo-1530268578403-df6e89da0d30?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y2FycGFya3xlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
									alt='Car parks'
									width={900}
									height={300}
								/>
								<h3>{house?.carParks} Car Parks</h3>
							</Carousel.Item>
						) : house?.carParks === 1 ? (
							<Carousel.Item className='carousel__wrap'>
								<img
									className='carousel__image'
									src='https://images.unsplash.com/photo-1530268578403-df6e89da0d30?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y2FycGFya3xlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
									alt='Car parks'
									width={900}
									height={300}
								/>
								<h3>{house?.carParks} Car Park</h3>
							</Carousel.Item>
						) : null}
					</Carousel>
				</section>
			</div>
		</div>
	);
}

export default HouseProfile;
