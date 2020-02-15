import { useState, useEffect } from 'react';

function useDarkMode() {
	const [mode, setMode] = useState('dark');

	const updateMode = (newMode) => {
		window.localStorage.setItem('theme', newMode);
		setMode(newMode);
	};

	const toggleTheme = () => updateMode(mode === 'light' ? 'dark' : 'light');

	useEffect(() => {
		const localTheme = window.localStorage.getItem('theme');
		const isDark =
			window.matchMedia &&
			window.matchMedia('(prefers-color-scheme: dark)').matches &&
			!localTheme;
		isDark
			? updateMode('dark')
			: localTheme
			? setMode(localTheme)
			: updateMode('light');
	}, []);

	return [mode, toggleTheme];
}

export default useDarkMode;
