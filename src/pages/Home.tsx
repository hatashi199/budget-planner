const Home: React.FC = () => {
	return (
		<div className='flex justify-center items-center w-full h-[100vh]'>
			<form className='flex flex-col items-start menu-shadow'>
				<label>
					<span className='text-purpleD'>Introduce tu nombre:</span>
					<input
						type='text'
						placeholder='Nombre'
					/>
				</label>
				<label>
					<span className='text-purpleD'>
						Introduce tu presupuesto:
					</span>
					<input
						type='text'
						placeholder='Presupuesto'
					/>
				</label>
				<button>Aceptar</button>
			</form>
		</div>
	);
};

export default Home;
