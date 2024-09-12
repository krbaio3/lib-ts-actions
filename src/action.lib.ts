// (dialogo_id = 2) AND (control_id = 1094) AND (secuencia_id = 7022)

import { ActionObject, GlobalResponseTypes, SequenceForEvent } from './types/send.types.ts';
import { ActionAbstract }                                      from './types/action.abstract.ts';
import { debug }                                               from '@/core/logger.core.ts';

export class ActionLibrary extends ActionAbstract {
	constructor() {
		super();
		this.validaciones = this.validaciones.bind(this);
		this.accionesDialog = this.accionesDialog.bind(this);
		this.eventosSec = this.eventosSec.bind(this);
		this.funciones = this.funciones.bind(this);
	}
	public async validaciones<T>(eventObject: ActionObject): Promise<GlobalResponseTypes<T>> {
		debug('validaciones: ', JSON.stringify(eventObject));
		return Promise.resolve(eventObject as unknown as GlobalResponseTypes<T>);
	}
	public async accionesDialog<T>(eventObject: ActionObject): Promise<GlobalResponseTypes<T>> {
		debug('accionesDialog: ', JSON.stringify(eventObject));
		const { funcionId, codTransaction, codApp } = eventObject;
		return Promise.resolve(
			_getAccionesDialogo<T>({
				funcionId,
				codTransaction: codTransaction as string,
				codApp: codApp as string,
			}),
		);
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

		let result = await fetch(`${import.meta.env.VITE_API_URL}/evento/${secuenciaId}/${dialogoId}/${nodoId}`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				Charset: 'UTF-8',
			},
		}).then((response) => response.json() as Promise<any>);

		result.data = result.data.map((item: SequenceForEvent) => ({
			...item,
			parametros: item.node_parametros?.split(':'),
			node_parametros: undefined,
		}));
		debug('eventosSec result: ', JSON.stringify(result));
		return result;
	}
	public async funciones<NexoApiObject>(eventObject: ActionObject): Promise<GlobalResponseTypes<NexoApiObject>> {
		const { funcionId: funcId, tipoFunId: tipoId, parameters } = eventObject;
		let result = await fetch(`${import.meta.env.VITE_API_URL}/nexo-api/${funcId}/${tipoId}`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				Charset: 'UTF-8',
			},
		}).then((response: Response) => response.json() as Promise<any>);

		debug('funciones result: ', JSON.stringify(result), eventObject);

		result.data = result.data.map((item: NexoApiObject) => ({
			...item,
			parametros: parameters?.split(':'),
		}));

		return result;
	}

	public async middleCallService(app: string, name: string): Promise<Response> {
		return await fetch(`${import.meta.env.VITE_API_URL}/schemas/${app}/${name}`, { method: 'GET' });
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
	let method = {
		ok: true,
		data: {
			method: [''],
		},
	};
	switch (parseInt(funcionId as string, 10)) {
		case 10128: {
			console.log('================');
			console.log('actualizar datos');
			console.log('================');
			// TODO: ver cómo sacar los datos a actualizar
			method.data.method = ['actualizar datos'];
			break;
		}
		case 10003: {
			console.log('================');
			console.log('asociar mensajes');
			console.log('================');
			method.data.method = ['asociar mensajes'];
			break;
		}

		case 10078: {
			console.log('================');
			console.log('parada de ejecucion');
			console.log('================');
			method.data.method = ['parada de ejecucion'];
			break;
		}

		case 10013: {
			console.log('================');
			console.log('generar mensajes');
			console.log('================');
			break;
		}
	}

	return new Promise((resolve) => setTimeout(() => resolve(method as unknown as GlobalResponseTypes<T>), 500));
}
