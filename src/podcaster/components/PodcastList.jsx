import { PodcastCard } from './PodcastCard';

export const PodcastList = () => {
	return (
		<>
			<section className='mt-7 px-4 w-full pt-10'>
				<div className='grid grid-cols-4 gap-4'>
					<PodcastCard />
				</div>
			</section>
		</>
	);
};
