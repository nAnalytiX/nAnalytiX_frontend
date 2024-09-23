import Grapher_T from 'components/Grapher/translation'
import Graph_T from 'components/Grapher/Graph/translation'
import LanguageSelector_T from 'components/UI/NavigationBar/LanguageSelector/translation'
import MethodsList_T from 'components/UI/NavigationBar/MethodsList/translation'
import NavigationBar_T from 'components/UI/NavigationBar/translation'
import FunctionInput_T from 'components/UI/FunctionInput/translation'
import Methods_T from 'components/Methods/translation'
import IncrementalSearch_T from 'components/Methods/IncrementalSearch/translation'

const es = {
	translation: {
		common: {
			methods: {
				non_linear_equations: {
					_: 'Sistemas de Ecuaciones No Lineales',
					incremental_search: 'Búsqueda Incremental',
					bisection: 'Método de Bisección',
					false_rule: 'Regla Falsa',
					newton: 'Método de Newton',
					multi_roots: 'Método de las Raíces Múltiples',
					secant: 'Método de la Secante',
					fixed_point: 'Punto Fijo',
				},
				linear_equations: {
					_: 'Sistemas de Ecuaciones Lineales',
					gauss_simple: 'Eliminación Gaussiana Simple',
					gauss_parcial: 'Eliminación Gaussiana con Pivote Parcial',
					gauss_total: 'Eliminación Gaussiana con Pivote Total',
					simple_lu: 'Factorización LU Simple',
					pivot_lu: 'Factorización LU con Pivote Parcial',
					crout: 'Método Crout',
					doolittle: 'Método Doolittle',
					choolesky: 'Método Choolesky',
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
			Methods: Methods_T.es,
			IncrementalSearch: IncrementalSearch_T.es,
		},
	},
}

const en = {
	translation: {
		components: {
			NavigationBar: NavigationBar_T.en,
			MethodsList: MethodsList_T.en,
			LanguageSelector: LanguageSelector_T.en,
			Grapher: Grapher_T.en,
			Graph: Graph_T.en,
			FunctionInput: FunctionInput_T.en,
			Methods: Methods_T.en,
			IncrementalSearch: IncrementalSearch_T.en,
		},
	},
}

const resources = { es, en }

export default resources
