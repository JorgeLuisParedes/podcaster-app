import { HeaderBar, PodcastDetails } from '../components';

export const PodcastPage = () => {
	return (
		<>
			<HeaderBar />
			<div className='flex'>
				<PodcastDetails />
				<section className='w-4/5 h-screen bg-slate-500'></section>
			</div>
		</>
	);
};
