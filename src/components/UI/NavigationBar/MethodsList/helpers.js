/**
 * Helpers for MethodsList
 */

const non_linear_equations = [
	'incremental_search',
	'bisection',
	'false_rule',
	'newton',
	'multi_roots',
	'secant',
	'fixed_point',
]

const linear_equations = [
	'gauss_simple',
	'gauss_parcial',
	'gauss_total',
	'simple_lu',
	'pivot_lu',
	'crout',
	'doolittle',
	'choolesky',
	'jacobi',
	'gauss_seidel',
	'sor',
	'vandermonde',
]

const interpolation = ['diff_divide', 'lagrange', 'linear_spline', 'square_spline', 'cubic_spline']

export const methods_list = { non_linear_equations, linear_equations, interpolation }

export default {}
