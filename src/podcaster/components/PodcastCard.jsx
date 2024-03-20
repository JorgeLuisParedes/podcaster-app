import { Link } from 'react-router-dom';

export const PodcastCard = () => {
	const people = [
		{
			id: 1,
			imgSrc: 'https://is1-ssl.mzstatic.com/image/thumb/Podcasts113/v4/f2/21/fa/f221fabd-017f-5125-633b-f1fe4f39802a/mza_182995249085044287.jpg/170x170bb.png',
			name: 'The Joe Budden Podcast',
			role: 'The Joe Budden Network',
		},
		{
			id: 2,
			imgSrc: 'https://is1-ssl.mzstatic.com/image/thumb/Podcasts112/v4/47/c9/84/47c984c5-bec1-3c87-0fa2-ee4a003c9052/mza_2893667378684577479.jpg/170x170bb.png',
			name: 'Million Dollaz Worth Of Game',
			role: 'Barstool Sports',
		},
		{
			id: 3,
			imgSrc: 'https://is1-ssl.mzstatic.com/image/thumb/Podcasts124/v4/88/18/59/881859a5-f344-c249-f4b9-3d9b62add05a/mza_16428964146354887078.png/170x170bb.png',
			name: 'A History of Rock Music in 500 Songs',
			role: 'Andrew Hickey',
		},
		{
			id: 4,
			imgSrc: 'https://is1-ssl.mzstatic.com/image/thumb/Podcasts122/v4/74/29/f1/7429f163-e7bb-4497-617c-0a62c9f0561c/mza_9306467569213316131.jpg/170x170bb.png',
			name: "60 Songs That Explain the '90s",
			role: 'The Ringer',
		},
		{
			id: 5,
			imgSrc: 'https://is1-ssl.mzstatic.com/image/thumb/Podcasts116/v4/7e/94/f4/7e94f4be-9760-beb9-08d2-d2153331eb33/mza_7067330178641800946.jpeg/170x170bb.png',
			name: 'The Nightingale of Iran',
			role: 'Danielle Dardashti, Galeet Dardashti',
		},
		{
			id: 6,
			imgSrc: 'https://is1-ssl.mzstatic.com/image/thumb/Podcasts112/v4/31/80/56/3180562e-ac0b-f10e-7120-641b1c26e0f8/mza_10135383815267163613.jpg/170x170bb.png',
			name: 'New Rory & MAL',
			role: 'Rory Farrell & Jamil "Mal" Clay & Studio71',
		},
		{
			id: 7,
			imgSrc: 'https://is1-ssl.mzstatic.com/image/thumb/Podcasts126/v4/1f/ad/c7/1fadc7d4-1e22-beaa-720a-2e2988dc1521/mza_16091018887573148747.jpg/170x170bb.png',
			name: 'Drink Champs',
			role: 'Interval Presents',
		},
		{
			id: 8,
			imgSrc: 'https://is1-ssl.mzstatic.com/image/thumb/Podcasts122/v4/ae/34/3e/ae343e48-b939-04fe-47fc-960ba706e95b/mza_4292063000205899533.jpg/170x170bb.png',
			name: "Rolling Stone's 500 Greatest Songs",
			role: 'iHeartPodcasts',
		},
		{
			id: 9,
			imgSrc: 'https://is1-ssl.mzstatic.com/image/thumb/Podcasts122/v4/f1/91/58/f1915829-0639-3bd9-8e3f-8c2ac747acec/mza_14652512068862442143.jpeg/170x170bb.png',
			name: 'DISGRACELAND',
			role: 'Double Elvis Productions',
		},
		{
			id: 10,
			imgSrc: 'https://is1-ssl.mzstatic.com/image/thumb/Podcasts122/v4/98/3d/d3/983dd3a6-22de-b031-bf52-ff1852bf4e6d/mza_173863752039916960.jpg/170x170bb.png',
			name: 'On Air with Brandon Jay',
			role: 'Brandon Jay',
		},
	];

	return (
		<>
			{people.map(person => (
				<Link
					to={`/podcast/${person.id}`}
					key={person.id}
					className='w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow mb-10 transition ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-slate-50 duration-10'>
					<div className='flex flex-col items-center pb-6'>
						<img
							className='w-24 h-24 mb-3 -mt-10 rounded-full shadow-lg'
							src={person.imgSrc}
							alt={`${person.name} image`}
						/>
						<h5 className='mb-1 text-md font-semibold text-gray-900 uppercase'>
							{person.name}
						</h5>
						<span className='text-sm text-gray-500'>
							{person.role}
						</span>
					</div>
				</Link>
			))}
		</>
	);
};
