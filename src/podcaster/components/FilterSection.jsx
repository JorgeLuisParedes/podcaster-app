export const FilterSection = () => {
	return (
		<div className='flex justify-end mt-7 pe-4'>
			<span className='bg-blue-700 text-white text-base font-semibold me-2 px-4 py-1 rounded-full'>
				100
			</span>
			<div className='relative w-72'>
				<form className=''>
					<input
						type='text'
						id=''
						placeholder='Filter podcasts...'
						className='bg-white border w-full border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-700 p-1.5 px-3'
					/>
				</form>
			</div>
		</div>
	);
};
