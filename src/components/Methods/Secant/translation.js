/**
 * Translations for MethodsSecant
 */

const Secant_T = {
	es: {
		name: 'Método de la Secante',
		empty_table:
			'No tenemos ningun dato para mostrar, por favor llena los datos y corre el metodo para encontrar raices.',
		columns: {
			iterations: 'Iteraciónes',
		},
		conclution: {
			root_aproximation: 'Se ha encontrado una aproximación de una raiz en el valor Xm =',
			root_found: 'Se ha encontrado una una raiz en el valor Xm =',
		},
		errors: {
			func: 'La Función tiene errores, por favor revisala nuevamente.',
			x0_value: 'Por favor revisa el Valor Inicial x0, no se puede evaluar en la función.',
			x1_value: 'Por favor revisa el Valor Inicial x1, no se puede evaluar en la función.',
			nmax: 'El número máximo de iteraciones no puede ser menor a 0 o superior a 100.',
			tolerance: 'La tolerancia debe que existir.',
			root_not_found: 'No se encontró ninguna una raíz ni una posible aproximación.',
			method_fail: 'El método fallo por algún motivo, por favor vuélvelo a intentar con otros valores.',
			initial_values: 'Los Valores Iniciales no pueden ser iguales.',
			divide_by_zero: 'Se encontro una division por cero.',
		},
	},
	en: {
		name: 'Secant Method',
	},
}

export default Secant_T
