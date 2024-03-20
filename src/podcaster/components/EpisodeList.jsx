export const EpisodeList = () => {
	const episodes = [
		{
			id: 1,
			name: 'Apple MacBook Pro 17',
			date: '01/03/2016',
			time: '14:00',
		},
		{
			id: 2,
			name: 'Microsoft Surface Pro',
			date: '18/02/2016',
			time: '15:03',
		},
		{
			id: 3,
			name: 'Magic Mouse 2',
			date: '09/02/2016',
			time: '12:18',
		},
	];

	return (
		<>
			<section className='w-4/5'>
				<div className='w-11/12 mx-auto mb-7'>
					<h2 className='border border-gray-200 mx-auto p-3 rounded-md shadow text-2xl font-semibold'>
						Episodes: {episodes.length}
					</h2>
				</div>
				<div className='w-11/12 mx-auto py-7 px-3 border border-gray-200 rounded-md shadow'>
					<div className='relative overflow-x-auto'>
						<table className='w-full text-sm text-left text-gray-500'>
							<thead className='text-base text-gray-700'>
								<tr>
									<th
										scope='col'
										className='px-6 py-3 w-10/12'>
										Title
									</th>
									<th
										scope='col'
										className='px-6 py-3 w-1/12'>
										Date
									</th>
									<th
										scope='col'
										className='px-6 py-3 w-1/12'>
										Duration
									</th>
								</tr>
							</thead>
							<tbody>
								{episodes.map(episode => (
									<tr
										className='odd:bg-gray-100 even:bg-white border-b'
										key={episode.id}>
										<th
											scope='row'
											className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap'>
											<a
												href='#'
												className='text-blue-600 hover:underline'>
												{episode.name}
											</a>
										</th>
										<td className='px-6 py-4'>
											{episode.date}
										</td>
										<td className='px-6 py-4'>
											{episode.time}
										</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				</div>
			</section>
		</>
	);
};
