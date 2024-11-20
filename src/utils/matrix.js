import { gql } from '@apollo/client'

export const generateMatrix = (size_x, size_y) => {
	let result = new Array(size_y)

	for (let i = 0; i < size_y; i++) {
		result[i] = new Array(size_x)
		result[i].fill(1)
	}
	return result
}

export const formatVector = (matrix) => {
	let result = new Array(matrix.length)

	result = matrix.map((row) => Number(row.join('')))

	return result
}

export const a_default_value = [
	[2, -1, 0, 3],
	[1, 0.5, 3, 8],
	[0, 13, -2, 11],
	[14, 5, -2, 3],
]

export const b_default_value = [[1], [1], [1], [1]]

export const RESOLVE_LINEAR_EQUATION = gql`
	mutation nonLinearEquationResolver(
		$method: String!
		$matrixA: JSON!
		$vectorB: JSON!
		$vectorX0: JSON
		$tolerance: Float
		$nmax: Int
	) {
		nonLinearEquationResolver(
			input: {
				method: $method
				matrixA: $matrixA
				vectorB: $vectorB
				vectorX0: $vectorX0
				tolerance: $tolerance
				nmax: $nmax
			}
		) {
			result
		}
	}
`
