import i18next from 'utils/languages/i18n.js'

import Bisection from 'components/Methods/Bisection'
import FalsePosition from 'components/Methods/FalsePosition'
import FixedPoint from 'components/Methods/FixedPoint'
import IncrementalSearch from 'components/Methods/IncrementalSearch'
import MultipleRoots from 'components/Methods/MultipleRoots'
import Newton from 'components/Methods/Newton'
import Secant from 'components/Methods/Secant'
import GaussSimple from 'components/Methods/GaussSimple'
import GaussPartial from 'components/Methods/GaussPartial'
import GaussTotal from 'components/Methods/GaussTotal'
import FactorizationLuSimple from 'components/Methods/FactorizationLuSimple'
import FactorizationLuPartial from 'components/Methods/FactorizationLuPartial'
import Crout from 'components/Methods/Crout'
import Doolittle from 'components/Methods/Doolittle'
import Cholesky from 'components/Methods/Cholesky'
import Jacobi from 'components/Methods/Jacobi'
import GaussSeidel from 'components/Methods/GaussSeidel'
import Sor from 'components/Methods/Sor'
import Vandermonde from 'components/Methods/Vandermonde'
import DiffDivide from 'components/Methods/DiffDivide'
import Lagrange from 'components/Methods/Lagrange'
import SplineLinear from 'components/Methods/SplineLinear'
import SplineCubic from 'components/Methods/SplineCubic'
import SplineSquare from 'components/Methods/SplineSquare'

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
	gauss_simple: GaussSimple,
	gauss_partial: GaussPartial,
	gauss_total: GaussTotal,
	simple_lu: FactorizationLuSimple,
	pivot_lu: FactorizationLuPartial,
	crout: Crout,
	doolittle: Doolittle,
	cholesky: Cholesky,
	jacobi: Jacobi,
	gauss_seidel: GaussSeidel,
	sor: Sor,
	vandermonde: Vandermonde,
}

const linear_equations_keys = Object.keys(linear_equations)

const interpolation = {
	diff_divide: DiffDivide,
	lagrange: Lagrange,
	linear_spline: SplineLinear,
	square_spline: SplineSquare,
	cubic_spline: SplineCubic,
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
