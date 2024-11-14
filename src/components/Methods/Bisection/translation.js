/**
 * Translations for MethodsBisection
 */

const Bisection_T = {
	es: {
		name: 'Método de Bisección',
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
			interval: 'El Intervalo no cumple con el teorema.',
			a_interval: 'Por favor revisa el Intervalo B, no se puede evaluar en la función.',
			b_interval: 'Por favor revisa el Intervalo A, no se puede evaluar en la función.',
			nmax: 'El número máximo de iteraciones no puede ser menor a 0 o superior a 100.',
			tolerance: 'La tolerancia debe que existir.',
			root_not_found: 'No se encontró ninguna una raíz ni una posible aproximación.',
			method_fail: 'El método fallo por algún motivo, por favor vuélvelo a intentar con otros valores.',
		},
	},
	en: {
		name: 'Bisection Method',
		empty_table: "We don't have any data to display, please fill in the form and run the method to find roots.",
	},
}

export default Bisection_T
