import HouseCard from '../HouseCard/HouseCard';
import { Row } from 'react-bootstrap';

function HouseList({ houses, houseImages }) {
	return (
		<div>
			<h2 style={{ padding: '20px 0px' }}>Properties</h2>
			<div>
				<Row>
					{houses.map((house, i) => {
						return (
							<HouseCard
								key={i}
								id={i}
								house={house}
								image={`https://${houseImages[i]?.fields?.file?.url}`}
							/>
						);
					})}
				</Row>
			</div>
		</div>
	);
}

export default HouseList;
