export const PodcastDetails = () => {
	const podcast = {
		titulo: 'The Joe Budden Podcast - The Joe Budden Network',
		autor: 'The Joe Budden Network',
		imagen: 'https://is1-ssl.mzstatic.com/image/thumb/Podcasts113/v4/f2/21/fa/f221fabd-017f-5125-633b-f1fe4f39802a/mza_182995249085044287.jpg/170x170bb.png',
		descripcion:
			'Tune into Joe Budden and his friends. Follow along the crazy adventures of these very random friends.',
	};
	return (
		<>
			<aside className='w-1/5'>
				<div className='w-9/12 border border-gray-200 mx-auto py-5 px-3 rounded-md shadow'>
					<img
						className='mx-auto rounded-md'
						src={podcast.imagen}
						alt=''
					/>
					<hr className='my-5' />
					<h2 className='text-md font-semibold'>{podcast.titulo}</h2>
					<p className='text-md italic'>by: {podcast.autor}</p>
					<hr className='my-5' />
					<h3 className='text-sm font-semibold'>Description:</h3>
					<p className='text-sm italic'>{podcast.descripcion}</p>
				</div>
			</aside>
		</>
	);
};
