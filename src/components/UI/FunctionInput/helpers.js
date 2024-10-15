/**
 * Helpers for FunctionInput
 */

const sin_values = ['sen', 'zen']
const exp_values = ['e']

const valid_nodes = ['sin', 'cos', 'tan', 'sqrt', 'exp', 'ln', 'log', 'x']
const separation_nodes = ['+', '-', '/', '*', ')', '(']

export const formatter = (string = '') => {
	let format_string = string.toLowerCase().split('')

	let nodes = []

	const result = format_string.reduce((acc, current) => {
		if (separation_nodes.includes(current) || current == ' ') {
			nodes = [...nodes, acc, current]

			acc = ''
		} else {
			acc += current
		}

		return acc
	}, '')

	nodes = [...nodes, result].filter((node) => node != '')

	nodes = nodes.map((curr, index) => {
		if (curr === ' ') return curr

		if ([...valid_nodes, ...separation_nodes].includes(curr) || Number(curr).isNaN || curr.includes('x')) {
			return curr
		}

		if (nodes[index + 1] === '(') {
			if (sin_values.includes(curr)) {
				return 'sin'
			} else if (exp_values.includes(curr)) {
				return 'exp'
			}
		}

		return Number(curr)
	})

	if (nodes.includes(NaN)) {
		return 'error'
	} else {
		return nodes.join('')
	}
}

export default {}
