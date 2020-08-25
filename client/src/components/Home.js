import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'reactstrap';
import AOS from 'aos';
import { UncontrolledCarousel } from 'reactstrap';
import sonic from '../assets/sonicm.png';
import zelda from '../assets/zelda.png';
import reznor from '../assets/reznor.png';

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
				<h2
					ref={(ref) => {
						setRef(ref);
					}}
					data-aos="fade-right"
					className="welcome_text_title"
				>
					News
				</h2>
				<Row>
					<Col xs="12" sm="12" md="4">
						<img src={sonic} className="news_image" />
						<p
							ref={(ref) => {
								setRef(ref);
							}}
							data-aos="fade-up"
						>
							Sonic the Hedgehog is inside all of us. A gene and protein that separates your right brain
							from the left, and determines you have two eyes is called sonic hedgehog. The gene’s symbol
							is SHH. The name wasn’t inspired directly by the game, but a comic-book series. A British
							post-doc named Robert Riddle drew inspiration from a Sonic comic his 6-year-old daughter was
							reading. The gene appropriately has a spikey appearance.
						</p>
					</Col>
					<Col xs="12" sm="12" md="4">
						<img src={reznor} className="news_image" />
						<p
							ref={(ref) => {
								setRef(ref);
							}}
							data-aos="fade-up"
						>
							Super Mario and Nine Inch Nails Many of the Koopalings from the Super Mario games are named
							after famous musicians. Most people can see the pattern in Ludwig, Iggy, and Lemmy’s names.
							What you may not know is Super Mario World’s fire-breathing triceratops is named Reznor,
							named after Trent Reznor of Nine Inch Nails, who also created the soundtrack for Quake.
						</p>
					</Col>
					<Col xs="12" sm="12" md="4">
						<img src={zelda} className="news_image" />
						<p
							ref={(ref) => {
								setRef(ref);
							}}
							data-aos="fade-up"
						>
							Nintendo genius Shigeru Miyamoto, creator of the Donkey Kong and Super Mario Brothers
							franchises, is also credited with creating The Legend of Zelda franchise. Rather than
							encouraging gamers to achieve a high score, Miyamoto's game was focused on exploration and
							completion -- a relatively unique gaming concept at the time. His inspiration came from the
							joy and wonder he felt while exploring fields, woods and caves as a child.
						</p>
					</Col>
				</Row>
				<p>Source: https://www.gameinformer.com/</p>
			</Container>
			<Container id="carousel_container">
				<Row>
					<div id="carousel_wrapper">
						<UncontrolledCarousel items={items} />
					</div>
				</Row>
			</Container>
		</div>
	);
}
