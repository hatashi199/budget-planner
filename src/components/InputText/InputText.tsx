interface InputTextProps {
	label: string;
	placeholder?: string;
	value: string;
	changeEvent: (e: React.ChangeEvent<HTMLInputElement>) => void;
	error?: string;
	pattern?: string;
}

const InputText: React.FC<InputTextProps> = ({
	label,
	placeholder,
	value,
	changeEvent,
	error,
	pattern
}: InputTextProps) => {
	return (
		<label className='border-solid border-[2px] bg-whiteD dark:bg-purpleD dark:border-whiteD border-purpleD rounded-rad12 relative py-pad15 pl-pad15'>
			<span className='absolute top-[-10px] dark:text-whiteD text-purpleD dark:bg-purpleD bg-whiteD px-[5px]'>
				{label}
			</span>
			<input
				type='text'
				pattern={pattern}
				placeholder={placeholder}
				value={value}
				onChange={changeEvent}
				className='w-full bg-whiteD dark:bg-purpleD text-purpleD dark:text-whiteD'
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
