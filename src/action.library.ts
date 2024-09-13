// (dialogo_id = 2) AND (control_id = 1094) AND (secuencia_id = 7022)

import { ActionObject, GlobalResponseTypes, SequenceForEvent } from './types/send.types';
import { ActionAbstract } from './types/action.abstract';
import { debug, error } from '@codespartan/lib-ts-core';

export class ActionLibrary extends ActionAbstract {
	constructor(apiUrl: string) {
		super(apiUrl); // Se llama al constructor de la clase base. Si es necesrario, agregar más logica aquí. El constructor no se usa hasta que se llama a la clase.
	}
	public async validaciones<T>(eventObject: ActionObject): Promise<GlobalResponseTypes<T>> {
		debug('validaciones: ', JSON.stringify(eventObject));
		return eventObject as unknown as GlobalResponseTypes<T>;
	}
	public async accionesDialog<T>(eventObject: ActionObject): Promise<GlobalResponseTypes<T>> {
		debug('accionesDialog: ', JSON.stringify(eventObject));
		const { funcionId, codTransaction, codApp } = eventObject;
		return _getAccionesDialogo<T>({
			funcionId,
			codTransaction: codTransaction as string,
			codApp: codApp as string,
		});
	}
	public async eventosSec<T>(eventObject: ActionObject): Promise<GlobalResponseTypes<T>> {
		//  {
		//         "nameMethod": "metodo que ha llamado en el FACADE",
		//         "tipoFunIdMethod": "metodo que tiene que llamar en la libreria",
		//         "secuenciaId": "secuencia de la que partimos",
		//         "funcionId": "Si es menor a 10_000, se refiere a un nodo de la secuencia, si es mayor, es un  evento de la secuencia no visualizable
		//         "tipoFunId": "Nos indica el tipo de funcion a la que hay que llamar"
		//   },

		const { secuenciaId, dialogoId, funcionId: nodoId } = eventObject;
		debug('eventosSec: ', JSON.stringify(eventObject));
		if (this.apiUrl === undefined) {
			error('No se ha definido la URL de la API');
			throw new Error('No se ha definido la URL de la API');
		}

		const result = await fetch(`${this.apiUrl}/evento/${secuenciaId}/${dialogoId}/${nodoId}`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				Charset: 'utf8',
			},
		}).then((response) => response.json());

		result.data = result.data.map((item: SequenceForEvent) => ({
			...item,
			parametros: item.node_parametros?.split(':'),
			node_parametros: undefined,
		}));
		debug('eventosSec result: ', JSON.stringify(result));
		return result;
	}
	public async funciones<NexoApiObject>(eventObject: ActionObject): Promise<GlobalResponseTypes<NexoApiObject>> {
		const { funcionId: functionId, tipoFunId: tipoId, parameters } = eventObject;
		if (this.apiUrl === undefined) {
			error('No se ha definido la URL de la API');
			throw new Error('No se ha definido la URL de la API');
		}
		const result = await fetch(`${this.apiUrl}/nexo-api/${functionId}/${tipoId}`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				Charset: 'utf8',
			},
		}).then((response: Response) => response.json());

		debug('funciones result: ', JSON.stringify(result), eventObject);

		result.data = result.data.map((item: NexoApiObject) => ({
			...item,
			parametros: parameters?.split(':'),
		}));

		return result;
	}

	public async middleCallService(app: string, name: string): Promise<Response> {
		if (this.apiUrl === undefined) {
			error('No se ha definido la URL de la API');
			throw new Error('No se ha definido la URL de la API');
		}
		return await fetch(`${this.apiUrl}/schemas/${app}/${name}`, { method: 'GET' });
	}
}

// TODO: Sacar a un fichero aparte
function _getAccionesDialogo<T>({
	funcionId,
}: {
	funcionId: string | number;
	codTransaction: string;
	codApp: string;
}): Promise<GlobalResponseTypes<T>> {
	const method = {
		ok: true,
		data: {
			method: [''],
		},
	};
	switch (Number.parseInt(funcionId as string, 10)) {
		case 10_128: {
			console.log('================');
			console.log('actualizar datos');
			console.log('================');
			// TODO: ver cómo sacar los datos a actualizar
			method.data.method = ['actualizar datos'];
			break;
		}
		case 10_003: {
			console.log('================');
			console.log('asociar mensajes');
			console.log('================');
			method.data.method = ['asociar mensajes'];
			break;
		}

		case 10_078: {
			console.log('================');
			console.log('parada de ejecucion');
			console.log('================');
			method.data.method = ['parada de ejecucion'];
			break;
		}

		case 10_013: {
			console.log('================');
			console.log('generar mensajes');
			console.log('================');
			break;
		}
	}

	return new Promise((resolve) => setTimeout(() => resolve(method as unknown as GlobalResponseTypes<T>), 500));
}
