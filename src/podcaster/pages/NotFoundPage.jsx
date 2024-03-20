import { HeaderBar } from '../components';

export const NotFoundPage = () => {
	return (
		<>
			<HeaderBar />
			<div className='w-3/4 mx-auto mt-20'>
				<h1 className='text-6xl font-semibold text-blue-700 mb-10 text-center'>
					Whoops! This link seems to be out of tune.
				</h1>
				<h2 className='text-4xl font-semibold mb-3'>
					Error 404: Signal Not Found
				</h2>
				<p className='mb-3'>
					We'd love to guide you to the content you're seeking, but it
					seems we've hit a minor technical snag: the page, podcast,
					or episode you're trying to reach is unavailable or never
					existed.
				</p>
				<p className='mb-3'>
					If you believe this is an error and we should be able to
					find what you're looking for, please, let us know. We're
					here to help and would love to guide you in the right
					direction or even recommend something new and exciting to
					listen to.
				</p>
				<p>
					Thank you for your patience and understanding. We hope this
					small detour is just a brief pause on your journey through
					the universe of our podcasts.
				</p>
			</div>
		</>
	);
};
