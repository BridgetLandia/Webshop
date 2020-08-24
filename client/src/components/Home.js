import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'reactstrap';
import AOS from 'aos';
import { UncontrolledCarousel } from 'reactstrap';

const items = [
	{
		src: 'https://res.cloudinary.com/dfjaln3y4/image/upload/v1598282849/webshop/main1_on0sy8.jpg',
		caption: '',
		key: '1'
	},
	{
		src: 'https://res.cloudinary.com/dfjaln3y4/image/upload/v1598282835/webshop/230208_orig_113_u8bpa5.jpg',
		caption: '',
		key: '2'
	},
	{
		src: 'https://res.cloudinary.com/dfjaln3y4/image/upload/v1598282825/webshop/main2_msv2yy.jpg',
		caption: '',
		key: '3'
	}
];

export default function Home() {
	const [ ref, setRef ] = useState([]);

	useEffect(() => {
		AOS.init({
			duration: 3000
		});
	});
	return (
		<div>
			<Container fluid={true} className="mainContent">
				<div>
					<div id="welcome_text_container">
						<div
							ref={(ref) => {
								setRef(ref);
							}}
							data-aos="fade-up"
							className="welcome_text_title"
						>
							<h2>What adventure will you enbark on?</h2>
						</div>
						<div
							ref={(ref) => {
								setRef(ref);
							}}
							data-aos="fade-right"
							className="welcome_text"
						>
							Here you will find what you are looking for.
						</div>
						<p
							ref={(ref) => {
								setRef(ref);
							}}
							data-aos="fade-up"
							className="welcome_text_last"
						>
							Best games for PS4 and Xbox.
						</p>
					</div>
				</div>
			</Container>
			<Container id="news">
				<h2>News</h2>
				<Row>
					<Col cols="3">
						<p>
							Sonic the Hedgehog is inside all of us. A gene and protein that separates your right brain
							from the left, and determines you have two eyes is called sonic hedgehog. The gene’s symbol
							is SHH. The name wasn’t inspired directly by the game, but a comic-book series. A British
							post-doc named Robert Riddle drew inspiration from a Sonic comic his 6-year-old daughter was
							reading. The gene appropriately has a spikey appearance.
						</p>
					</Col>
					<Col cols="3">
						<p>
							Super Mario and Nine Inch Nails Many of the Koopalings from the Super Mario games are named
							after famous musicians. Most people can see the pattern in Ludwig, Iggy, and Lemmy’s names.
							What you may not know is Super Mario World’s fire-breathing triceratops is named Reznor,
							named after Trent Reznor of Nine Inch Nails, who also created the soundtrack for Quake.
						</p>
					</Col>
					<Col cols="3">
						<p>
							Nintendo’s drug is the banana In the Game Boy title Final Fantasy Legend II, the player
							encountered a group of opium smugglers, but Nintendo’s censorship guidelines wouldn’t allow
							that to fly in the U.S. version. Instead of selling opium, the drug dealers were forced to
							peddle bananas in the back alleys of this world.
						</p>
					</Col>
				</Row>
				<p>Source: https://www.gameinformer.com/</p>
			</Container>
			<UncontrolledCarousel items={items} />
		</div>
	);
}
