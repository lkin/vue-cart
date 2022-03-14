export default {
	en: {
		name: 'English',
		load: () => { return import('./en.json'); },
	},
	ja: {
		name: '日本語',
		load: () => { return import('./ja.json'); },
	},
};
