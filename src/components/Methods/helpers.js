import { gql } from '@apollo/client'

export const RESOLVE_NON_LINEAR_EQUATION = gql`
	mutation nonLinearEquationResolver(
		$method: String!
		$fx: String
		$gx: String
		$derivate: String
		$second_derivate: String
		$a_interval: Float
		$b_interval: Float
		$x0: Float
		$x1: Float
		$delta: Float
		$tolerance: Float
		$nmax: Int
		$error_type: String
	) {
		nonLinearEquationResolver(
			input: {
				method: $method
				fx: $fx
				gx: $gx
				derivate: $derivate
				second_derivate: $second_derivate
				a_interval: $a_interval
				b_interval: $b_interval
				x0: $x0
				x1: $x1
				delta: $delta
				tolerance: $tolerance
				nmax: $nmax
				error_type: $error_type
			}
		) {
			result
		}
	}
`

export const common_initial_values = {
	fx: 'ln((sin(x)^2) + 1) - 1/2',
	derivate: '(2 * (sin(x)^2 + 1)^-1) * sin(x) * cos(x)',
	a_interval: 0,
	b_interval: 1,
	tolerance: 1e-7,
	nmax: 100,
	error_type: 'absolute',
}
