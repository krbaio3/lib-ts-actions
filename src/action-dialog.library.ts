import {type GlobalResponseTypes} from './types';
import {debug} from '@codespartan/lib-ts-core';

/**
 * @description Obtiene las acciones de diálogo
 * @param {string} funcionId dependiendo del valor puede ser una accion (tabla accion),
 * un evento no visualizable (tabla eventos_sec) una funcion de la tabla nexo_api o un evento
 * de la tabla eventos
 * @param {string} codTransaction Es el codigo de Transaccion
 * @returns {Promise<GlobalResponseTypes<T>>} Retorna un objeto con la respuesta de la petición
 */
export async function getAccionesDialogo<T>({
	funcionId,
}: {
	funcionId: string | number;
	codTransaction: string;
	codApp: string;
}): Promise<GlobalResponseTypes<T>> {
	const method: GlobalResponseTypes<any> = {
		ok: true,
		data: [
			{method: ['']},
		],
	};
	switch (Number.parseInt(funcionId as string, 10)) {
		case 10_003: {
			debug('===================');
			debug('asociación múltiple');
			debug('===================');
			method.data[0].method = ['asociar mensajes'];
			break;
		}

		case 10_002: {
			debug('===================');
			debug('acción de dialogo');
			debug('===================');
			method.data[0].method = ['salir'];
			break;
		}

		case 10_013: {
			debug('================');
			debug('generar mensajes');
			debug('================');
			method.data[0].method = ['generar mensajes'];
			break;
		}

		case 10_016: {
			debug('================');
			debug('generar mensajes');
			debug('================');
			method.data[0].method = ['generar mensajes'];
			break;
		}

		case 10_078: {
			debug('================');
			debug('parada de ejecucion');
			debug('================');
			method.data[0].method = ['parada de ejecucion'];
			break;
		}

		case 10_128: {
			debug('================');
			debug('actualizar datos');
			debug('================');
			// TODO: ver cómo sacar los datos a actualizar
			method.data[0].method = ['actualizar datos'];
			break;
		}

		default: {
			debug('===================');
			debug('Caso no contemplado');
			debug('===================');
			method.data[0].method = ['caso no contemplado: ' + funcionId];
			break;
		}
	}

	return new Promise(resolve => {
		// SetTimeout(() => {
		resolve(method);
		// }, 500);
	});
}
