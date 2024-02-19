import { IoMdMoon } from 'react-icons/io';
import { MdLightMode } from 'react-icons/md';

interface HeaderProps {
	changeTheme: {
		storedData: string | null;
		setLocalData: (newValue: string | null) => void;
		deleteLocalData: (key: string) => void;
	};
}
const Header: React.FC<HeaderProps> = ({ changeTheme }: HeaderProps) => {
	const handleClickTheme = () => {
		if (changeTheme.storedData === 'light') {
			changeTheme.setLocalData('dark');
		} else {
			changeTheme.setLocalData('light');
		}
	};

	return (
		<div
			className={`flex justify-between items-center bg-whiteD ${changeTheme.storedData === 'light' ? `box-shadow-light` : `box-shadow-dark`} dark:bg-purpleD w-full h-[80px] px-pad20`}
		>
			<div className='w-[48px] h-full'></div>
			<h1 className='text-purpleD dark:text-whiteD uppercase font-mulishEB text-[2.5rem]'>
				Monedero
			</h1>
			<div
				className='flex justify-center items-center rounded-[50%] bg-purpleL_Light dark:bg-purpleL_Dark w-[48px] h-[48px] cursor-pointer'
				onClick={handleClickTheme}
			>
				{changeTheme.storedData === 'light' ? (
					<IoMdMoon className='text-purpleD text-[28px]' />
				) : (
					<MdLightMode className='text-whiteD text-[28px]' />
				)}
			</div>
		</div>
	);
};

export default Header;
