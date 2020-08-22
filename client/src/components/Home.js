import React, { useEffect, useState } from 'react';
import { Container } from 'reactstrap';
import AOS from 'aos';

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
							<h3>Welcome to the Shop!</h3>
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
							Here everything was made with love and care.
						</p>
					</div>
				</div>
			</Container>
		</div>
	);
}
