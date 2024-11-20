/**
 * Helpers for MethodsList
 */

const non_linear_equations = [
	'incremental_search',
	'bisection',
	'false_position',
	'newton',
	'multiple_roots',
	'secant',
	'fixed_point',
]

const linear_equations = [
	'gauss_simple',
	'gauss_partial',
	'gauss_total',
	'simple_lu',
	'pivot_lu',
	'crout',
	'doolittle',
	'cholesky',
	'jacobi',
	'gauss_seidel',
	'sor',
	'vandermonde',
]

const interpolation = ['diff_divide', 'lagrange', 'linear_spline', 'square_spline', 'cubic_spline']

export const methods_list = { non_linear_equations, linear_equations, interpolation }

export const organized_list = [...non_linear_equations, ...linear_equations, ...interpolation]

export default {}
