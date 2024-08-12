/**
 * Component Generator
 */

const properCase = require('change-case').pascalCase

const plopFunc = (plop) => {
	plop.setGenerator('component', {
		description: 'this is a skeleton plopfile',
		prompts: [
			{
				type: 'input',
				name: 'name',
				message: 'What should it be called?',
				default: 'Button',
				validate: (value) => {
					if (/\/\//.test(value)) return 'A parent directory cannot have two adjacent `/`'
					if (/^\/|.+\/$/.test(value)) return 'A parent directory cannot start or end with a `/`'
					if (/.+/.test(value)) {
						return true
					}

					return 'The name is required'
				},
			},
			{
				type: 'confirm',
				name: 'wantStyles',
				default: false,
				message: 'Do you want styles file?',
			},
			{
				type: 'confirm',
				name: 'wantHelpers',
				default: false,
				message: 'Do you want helpers file?',
			},
		],
		actions: (data) => {
			// Generate index.tsx
			let filePath = data.name.split('/').map(properCase)
			const shortName = filePath.pop()
			filePath = filePath.join('/')
			const fullPath = `${filePath}/${shortName}`
			const pathForTranslate = `${filePath.replace('/', '.')}.${shortName}`

			const actions = [
				{
					type: 'add',
					path: `src/components/${fullPath}/index.js`,
					templateFile: './templates/generators/components/index.js.hbs',
					abortOnFail: true,
					data: { filePath, shortName, pathForTranslate },
				},
				{
					type: 'add',
					path: `src/components/${fullPath}/translation.js`,
					templateFile: './templates/generators/components/translation.js.hbs',
					abortOnFail: true,
					data: { filePath, shortName },
				},
			]

			// If the user wants styles
			if (data.wantStyles) {
				actions.push({
					type: 'add',
					path: `src/components/${fullPath}/styles.js`,
					templateFile: './templates/generators/components/styles.js.hbs',
					abortOnFail: true,
					data: { filePath, shortName },
				})
			}

			// If the user wants helpers
			if (data.wantHelpers) {
				actions.push({
					type: 'add',
					path: `src/components/${fullPath}/helpers.js`,
					templateFile: './templates/generators/components/helpers.js.hbs',
					abortOnFail: true,
					data: { filePath, shortName },
				})
			}

			return actions
		},
	})
}

module.exports = plopFunc
