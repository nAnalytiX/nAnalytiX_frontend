import i18next from 'utils/languages/i18n.js'

import Bisection from 'components/Methods/Bisection'
import FalsePosition from 'components/Methods/FalsePosition'
import FixedPoint from 'components/Methods/FixedPoint'
import IncrementalSearch from 'components/Methods/IncrementalSearch'
import MultipleRoots from 'components/Methods/MultipleRoots'
import Newton from 'components/Methods/Newton'
import Secant from 'components/Methods/Secant'

const non_linear_equations = {
	incremental_search: IncrementalSearch,
	bisection: Bisection,
	false_position: FalsePosition,
	newton: Newton,
	multiple_roots: MultipleRoots,
	secant: Secant,
	fixed_point: FixedPoint,
}

const non_linear_equations_keys = Object.keys(non_linear_equations)

const linear_equations = {
	gauss_simple: null,
	gauss_partial: null,
	gauss_total: null,
	simple_lu: null,
	pivot_lu: null,
	crout: null,
	doolittle: null,
	choolesky: null,
	jacobi: null,
	gauss_seidel: null,
	sor: null,
	vandermonde: null,
}

const linear_equations_keys = Object.keys(linear_equations)

const interpolation = {
	diff_divide: null,
	lagrange: null,
	linear_spline: null,
	square_spline: null,
	cubic_spline: null,
}

const interpolation_keys = Object.keys(interpolation)

export const methods_list = {
	non_linear_equations: non_linear_equations_keys,
	linear_equations: linear_equations_keys,
	interpolation: interpolation_keys,
}

export const methods_list_keys = [...non_linear_equations_keys, ...linear_equations_keys, ...interpolation_keys]

const full_methods_list_keys = { non_linear_equations, linear_equations, interpolation }

export const full_methods_list = Object.keys(full_methods_list_keys).reduce((result, current_section) => {
	Object.keys(full_methods_list_keys[current_section]).forEach((method_key) => {
		result[method_key] = {
			name: i18next.t(`common.methods.${current_section}.${method_key}`),
			component: full_methods_list_keys[current_section][method_key],
			section: current_section,
		}
	})

	return result
}, {})

export const getMethod = (method_key = null) => {
	if (method_key === null) return {}

	const formated_method_key = method_key.replace('-', '_')

	return { ...full_methods_list[formated_method_key], method_key: formated_method_key }
}

export default {}
