module.exports = {
	globDirectory: 'public/',
	globPatterns: [
		'**/*.{css,png,jpg,webp,html,json}'
	],
	swDest: 'public/sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};