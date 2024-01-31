import { MdLightMode } from 'react-icons/md';

const Header: React.FC = () => {
	return (
		<div className='flex justify-between items-center bg-whiteD box-shadow-1 h-[80px] px-pad20'>
			<div className='w-[48px] h-full'></div>
			<h1 className='text-purpleD uppercase font-mulishEB text-[2.5rem]'>
				Monedero
			</h1>
			<div className='flex justify-center items-center rounded-[50%] bg-purpleL_Light w-[48px] h-[48px]'>
				<MdLightMode className='text-purpleD text-[28px]' />
			</div>
		</div>
	);
};

export default Header;
