/**
 * Translations for MethodsIncrementalSearch
 */

const IncrementalSearch_T = {
	es: {
		name: 'Búsqueda Incremental',
		code: {
			1: 'Método de Búsquedas Incrementales',
			2: 'Verificaciones previas',
			3: 'Evaluar la función en el punto inicial',
			4: 'Verificar si ya estamos en la raíz',
			5: 'Ciclo para buscar la raíz en el intervalo',
			6: 'Calcular el siguiente punto',
			7: 'Verificar si hay un cambio de signo/raíz en el intervalo [x0, x1], de ser así  se almacena el intervalo',
			8: 'Actualizar x0 y f(x0) para la siguiente iteración',
			9: 'Verificar si se alcanzó el número máximo de iteraciones y no se encontró la raíz',
			10: 'Método para hacer las Verificaciones previas',
			11: 'Validar que el Delta sea mayor a cero',
			12: 'Validar que el el Número Máximo de Iteraciones sea mayor a cero',
			13: 'Validar que la Función sea valida',
		},
		columns: {
			interval: 'Intervalo',
			result: 'Resultado',
		},
		results: {
			interval_found: 'Raíz encontrada en este Intervalo',
		},
		empty_table:
			'No tenemos ningun dato para mostrar, por favor llena los datos y corre el metodo para encontrar raices.',
	},
	en: {
		name: 'Incremental Search',
		code: {
			1: 'Incremental Search Method',
			2: 'Preliminary Checks',
			3: 'Evaluate the function at the initial point',
			4: 'Check if we are already at the root',
			5: 'Loop to search for the root in the interval',
			6: 'Calculate the next point',
			7: 'Check if there is a symbol change in the interval [x0, x1]; if so, store the interval',
			8: 'Update x0 and f(x0) for the next iteration',
			9: 'Check if the maximum number of iterations has been reached and the root was not found',
			10: 'Method to perform the preliminary checks',
			11: 'Validate that the Delta is greater than zero',
			12: 'Validate that the Maximum Number of Iterations is greater than zero',
			13: 'Validate that the Initial value (x0) is a valid number',
			14: 'Validate that the Function is valid',
		},
		columns: {
			interval: 'Interval',
			result: 'Result',
		},
		results: {
			interval_found: 'Root found for this Interval',
		},
		empty_table: "We don't have any data to display, please fill in the form and run the method to find roots.",
	},
}

export default IncrementalSearch_T
