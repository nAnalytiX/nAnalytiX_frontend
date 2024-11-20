/**
 * Translations for MethodsFixedPoint
 */

const FixedPoint_T = {
	es: {
		name: 'Método de Punto Fijo',
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
			function_f: 'La Función F tiene errores, por favor revisala nuevamente.',
			function_g: 'La Función G tiene errores, por favor revisala nuevamente.',
			x0_value: 'Por favor revisa el Intervalo B, no se puede evaluar en la función.',
			nmax: 'El número máximo de iteraciones no puede ser menor a 0 o superior a 100.',
			tolerance: 'La tolerancia debe que existir.',
			root_not_found: 'No se encontró ninguna una raíz ni una posible aproximación.',
			method_fail: 'El método fallo por algún motivo, por favor vuélvelo a intentar con otros valores.',
			same_func: 'La Función F y G no pueden ser identicas.',
		},
	},
	en: {
		name: 'Fixed-Point Method',
	},
}

export default FixedPoint_T
