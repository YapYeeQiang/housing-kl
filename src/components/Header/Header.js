import './Header.css';
import { Link } from 'react-router-dom';
import { Navbar } from 'react-bootstrap';

function Header() {
	return (
		<Navbar expand='lg' variant='light' bg='dark'>
			<Navbar.Brand>
				<Link className='header__link' to='/'>
					Housing KL
				</Link>
			</Navbar.Brand>
		</Navbar>
	);
}

export default Header;
