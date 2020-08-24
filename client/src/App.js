import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './components/Home';
import Routes from './components/routes/Routes';
import ParticleComponent from './components/layout/Particles';

function App() {
	return (
		<div className="App">
			<Router>
				<div
					style={{
						position: 'absolute',
						top: 0,
						left: 0,
						width: '100%',
						height: '100%'
					}}
				>
					<ParticleComponent />
					<div
						style={{
							position: 'absolute',
							top: 0,
							left: 0,
							width: '100%',
							height: '100%'
						}}
					>
						{
							<Fragment>
								<Header />
								<Switch>
									<Route exact path="/" component={Home} />
									<Route component={Routes} />
								</Switch>
								<Footer />
							</Fragment>
						}
					</div>
				</div>
			</Router>
		</div>
	);
}

export default App;
