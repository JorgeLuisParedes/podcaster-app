export const EpisodeDetails = () => {
	const episode = {
		trackName:
			"Is Beyoncé's music #sponcon? And other mysteries LIVE in Brooklyn",
		description:
			'Sidestep the gossip and focus on the music in Ariana Grande’s latest album Eternal Sunshine. The music is an exercise in nostalgia: 70s Disco, 90s R&B, and 00s pop and dance music. As she moves through the musical past, her lyrics tear through past relationship. But its the way her lyrics interweave with the deft melodies and harmonies that reveal the meaning of the record. \\n\\nSign up for the Switched On Pop Newsletter\\n\\nSongs Discussed\\n\\nAriana Grande - Eternal Sunshine, Bye, Don’t Wanna Break Up Again,  True Story, The Boy Is Mine, We Can’t Be Friends, Imperfect For You\\n\\nIsaac Hayes - Theme From Shaft\\n\\nBarry White - Can’t Get Enough of Your Love Babe \\n\\nBritney Spears - Oops I Did It Again, Gimme More\\n\\nBrandy, Monica - The Boy Is Mine\\n\\nAaliyah - Are You That Somebody\\n\\nGinuwine - Pony\\n\\nRobyn - Call Your Girlfriend, Show Me Love\\n\\n\\nLearn more about your ad choices. Visit podcastchoices.com/adchoices',
		shortDescription:
			"At this year's On-Air Fest, Charlie and Nate unpacked musical mysteries about product placement in pop and new-age frequencies",
		episodeUrl:
			'https://www.podtrac.com/pts/redirect.mp3/pdst.fm/e/chtbl.com/track/524GE/traffic.megaphone.fm/VMP4948198307.mp3?updated=1710245153',
	};

	const paragraphs = episode.description.split('\\n\\n');

	return (
		<>
			<section className='w-4/5'>
				<div className='w-11/12 mx-auto p-3 border border-gray-200 rounded-md shadow'>
					<h2 className='text-2xl font-semibold mb-4'>
						Episodes: {episode.trackName}
					</h2>
					<div>
						{paragraphs.map((paragraph, index) => (
							<p
								className='mb-3'
								key={index}
								dangerouslySetInnerHTML={{
									__html: paragraph.replace(/\\n/g, '<br />'),
								}}
							/>
						))}
					</div>
					<audio controls className='w-full mt-4'>
						<source src={episode.episodeUrl} type='audio/mpeg' />
						Tu navegador no soporta el elemento de audio.
					</audio>
				</div>
			</section>
		</>
	);
};
