interface InputTextProps {
	label: string;
	placeholder?: string;
	value: string;
	changeEvent: (e: React.ChangeEvent<HTMLInputElement>) => void;
	error?: string;
}

const InputText: React.FC<InputTextProps> = ({
	label,
	placeholder,
	value,
	changeEvent,
	error
}: InputTextProps) => {
	return (
		<label className='border-solid border-[1px] border-purpleD rounded-rad12 relative py-pad15 pl-pad15'>
			<span className='absolute top-[-8px] text-purpleD bg-whiteD px-[5px]'>
				{label}
			</span>
			<input
				type='text'
				placeholder={placeholder}
				value={value}
				onChange={changeEvent}
				className='w-full bg-whiteD text-purpleD'
			/>
			{error && (
				<span className='absolute bottom-[-1.5rem] left-[15px] text-error text-[0.8rem]'>
					{error}
				</span>
			)}
		</label>
	);
};

export default InputText;
