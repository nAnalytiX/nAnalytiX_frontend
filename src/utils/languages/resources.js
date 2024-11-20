import Grapher_T from 'components/Grapher/translation'
import Graph_T from 'components/Grapher/Graph/translation'
import LanguageSelector_T from 'components/UI/NavigationBar/LanguageSelector/translation'
import MethodsList_T from 'components/UI/NavigationBar/MethodsList/translation'
import NavigationBar_T from 'components/UI/NavigationBar/translation'
import FunctionInput_T from 'components/UI/FunctionInput/translation'
import Methods_T from 'components/Methods/translation'
import IncrementalSearch_T from 'components/Methods/IncrementalSearch/translation'
import Bisection_T from 'components/Methods/Bisection/translation'
import FalsePosition_T from 'components/Methods/FalsePosition/translation'
import FixedPoint_T from 'components/Methods/FixedPoint/translation'
import MultipleRoots_T from 'components/Methods/MultipleRoots/translation'
import Newton_T from 'components/Methods/Newton/translation'
import Secant_T from 'components/Methods/Secant/translation'
import GaussSimple_T from 'components/Methods/GaussSimple/translation'
import GaussPartial_T from 'components/Methods/GaussPartial/translation'
import GaussTotal_T from 'components/Methods/GaussTotal/translation'
import Tolerance_T from 'components/UI/Inputs/Tolerance/translation'
import ErrorTypeInput_T from 'components/UI/Inputs/ErrorType/translation'
import IntervalInput_T from 'components/UI/Inputs/Interval/translation'
import MatrixSize_T from 'components/UI/Inputs/MatrixSize/translation'
import FactorizationLuSimple_T from 'components/Methods/FactorizationLuSimple/translation'
import FactorizationLuPartial_T from 'components/Methods/FactorizationLuPartial/translation'
import Crout_T from 'components/Methods/Crout/translation'
import Cholesky_T from 'components/Methods/Cholesky/translation'
import Doolittle_T from 'components/Methods/Doolittle/translation'

const es = {
	translation: {
		ui: {
			form: {
				validation: {
					required: 'Este campo es Requerido',
				},
			},
		},
		common: {
			methods: {
				non_linear_equations: {
					_: 'Sistemas de Ecuaciones No Lineales',
					incremental_search: 'Búsqueda Incremental',
					bisection: 'Método de Bisección',
					false_position: 'Regla Falsa',
					newton: 'Método de Newton',
					multiple_roots: 'Método de las Raíces Múltiples',
					secant: 'Método de la Secante',
					fixed_point: 'Punto Fijo',
				},
				linear_equations: {
					_: 'Sistemas de Ecuaciones Lineales',
					gauss_simple: 'Eliminación Gaussiana Simple',
					gauss_partial: 'Eliminación Gaussiana (Pivoteo Parcial)',
					gauss_total: 'Eliminación Gaussiana (Pivoteo Total)',
					simple_lu: 'Factorización LU Simple',
					pivot_lu: 'Factorización LU con Pivote Parcial',
					crout: 'Método Crout',
					doolittle: 'Método Doolittle',
					cholesky: 'Método Cholesky',
					jacobi: 'Método Jacobi',
					gauss_seidel: 'Método Gauss Seidel',
					sor: 'Método Sor',
					vandermonde: 'Método Vandermonde',
				},
				interpolation: {
					_: 'Interpolación',
					diff_divide: 'Método de Diferencias Divididas',
					lagrange: 'Lagrange',
					linear_spline: 'Trazador Lineal',
					square_spline: 'Trazador Cuadratico',
					cubic_spline: 'Trazador Cubico',
				},
			},
		},
		components: {
			NavigationBar: NavigationBar_T.es,
			MethodsList: MethodsList_T.es,
			LanguageSelector: LanguageSelector_T.es,
			Grapher: Grapher_T.es,
			Graph: Graph_T.es,
			FunctionInput: FunctionInput_T.es,
			Tolerance: Tolerance_T.es,
			ErrorTypeInput: ErrorTypeInput_T.es,
			Methods: Methods_T.es,
			IncrementalSearch: IncrementalSearch_T.es,
			Bisection: Bisection_T.es,
			FalsePosition: FalsePosition_T.es,
			FixedPoint: FixedPoint_T.es,
			MultipleRoots: MultipleRoots_T.es,
			Newton: Newton_T.es,
			Secant: Secant_T.es,
			GaussSimple: GaussSimple_T.es,
			GaussPartial: GaussPartial_T.es,
			GaussTotal: GaussTotal_T.es,
			FactorizationLuSimple: FactorizationLuSimple_T.es,
			FactorizationLuPartial: FactorizationLuPartial_T.es,
			IntervalInput: IntervalInput_T.es,
			MatrixSize: MatrixSize_T.es,
			Crout: Crout_T.es,
			Cholesky: Cholesky_T.es,
			Doolittle: Doolittle_T.es,
		},
	},
}

const en = {
	translation: {
		common: {
			methods: {
				non_linear_equations: {
					_: 'Non-Linear Equation Systems',
					incremental_search: 'Incremental Search',
					bisection: 'Bisection Method',
					false_position: 'False Position',
					newton: "Newton's Method",
					multiple_roots: 'Multiple Roots Method',
					secant: 'Secant Method',
					fixed_point: 'Fixed Point',
				},
				linear_equations: {
					_: 'Linear Equation Systems',
					gauss_simple: 'Gaussian Elimination',
					gauss_partial: 'Gaussian Elimination (Partial Pivoting)',
					gauss_total: 'Gaussian Elimination (Total Pivoting)',
					simple_lu: 'LU Factorization',
					pivot_lu: 'LU Factorization (Partial Pivoting)',
					crout: "Crout's Method",
					doolittle: "Doolittle's Method",
					cholesky: "Cholesky's Method",
					jacobi: "Jacobi's Method",
					gauss_seidel: 'Gauss-Seidel Method',
					sor: 'SOR Method',
					vandermonde: 'Vandermonde Method',
				},
				interpolation: {
					_: 'Interpolation',
					diff_divide: 'Divided Differences Method',
					lagrange: 'Lagrange',
					linear_spline: 'Linear Spline',
					square_spline: 'Quadratic Spline',
					cubic_spline: 'Cubic Spline',
				},
			},
		},

		components: {
			NavigationBar: NavigationBar_T.en,
			MethodsList: MethodsList_T.en,
			LanguageSelector: LanguageSelector_T.en,
			Grapher: Grapher_T.en,
			Graph: Graph_T.en,
			FunctionInput: FunctionInput_T.en,
			Tolerance: Tolerance_T.en,
			Methods: Methods_T.en,
			IncrementalSearch: IncrementalSearch_T.en,
			Bisection: Bisection_T.en,
			FalsePosition: FalsePosition_T.en,
			FixedPoint: FixedPoint_T.en,
			MultipleRoots: MultipleRoots_T.en,
			Newton: Newton_T.en,
			Secant: Secant_T.en,
			GaussSimple: GaussSimple_T.en,
			GaussPartial: GaussPartial_T.en,
			GaussTotal: GaussTotal_T.en,
			ErrorTypeInput: ErrorTypeInput_T.en,
			IntervalInput: IntervalInput_T.en,
			MatrixSize: MatrixSize_T.en,
			FactorizationLuSimple: FactorizationLuSimple_T.en,
			FactorizationLuPartial: FactorizationLuPartial_T.en,
			Crout: Crout_T.en,
			Cholesky: Cholesky_T.en,
			Doolittle: Doolittle_T.en,
		},
	},
}

const resources = { es, en }

export default resources
