import { MdLightMode } from 'react-icons/md';

const Header: React.FC = () => {
	return (
		<div className='flex justify-between items-center bg-whiteD rounded-br-rad12 rounded-bl-rad12 menu-shadow'>
			<h1 className='text-purpleD uppercase'>Monedero</h1>
			<div className='flex justify-center items-center rounded-[50%] bg-purpleL_Light'>
				<MdLightMode className='text-purpleD' />
			</div>
		</div>
	);
};

export default Header;
