import React, { useState, useEffect } from 'react';
import './App.css';
import { useDarkMode } from './hooks';

import {
	MaxHeightFluidContainer,
	Header,
	Subtitle,
	SubtleLink,
	PaddedDiv,
	FAB,
	TopNav,
} from './components';

import { BrowserRouter as Router } from 'react-router-dom';
import { theme } from './theme';
import { ThemeProvider } from 'styled-components';

function App() {
	const [mode, toggleTheme] = useDarkMode();
	const [statefulTheme, setTheme] = useState(theme[mode]);

	useEffect(() => {
		setTheme(theme[mode]);
	}, [mode]);

	return (
		<ThemeProvider theme={statefulTheme}>
			<Router>
				<MaxHeightFluidContainer>
					<TopNav />
					<PaddedDiv>
						<Header>Hey, I'm Liam.</Header>
						<Subtitle>
							I'm a product-minded engineer.
							<br />
							I'm working at evervault to make data privacy simple and
							accessible for all.
							<br />
							If that sounds like something that would interest you, check out
							our{' '}
							<SubtleLink target='_blank' href='https://evervault.com/careers'>
								careers page
							</SubtleLink>
							.
						</Subtitle>
					</PaddedDiv>
					<FAB onClick={toggleTheme} darkMode={mode === 'dark'} />
				</MaxHeightFluidContainer>
			</Router>
		</ThemeProvider>
	);
}

export default App;
