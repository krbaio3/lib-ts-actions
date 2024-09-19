import {
	type ActionObject, type GlobalResponseTypes, type SequenceForEvent, ActionAbstract,
} from './types';
import {debug, error} from '@codespartan/lib-ts-core';
import { getAccionesDialogo } from './action-dialog.library';

/**
 * @description Clase que implementa la lógica de las acciones de la librería.
 * @class
 * @extends ActionAbstract
 * @param {string} apiUrl - URL de la API
 * @example
 * const actionLibrary = new ActionLibrary('http://localhost:3000');
 */
export class ActionLibrary extends ActionAbstract {
	/**
	 * @constructor
	 * @param {string} apiUrl - URL de la API
	 * @example
	 * const actionLibrary = new ActionLibrary('http://localhost:3000');
	 */
	constructor(apiUrl: string) {
		super(apiUrl); // Se llama al constructor de la clase base. Si es necesrario, agregar más logica aquí. El constructor no se usa hasta que se llama a la clase.
	}

	/**
	 * @description Valida las acciones de la librería
	 * @param {ActionObject} eventObject
	 * @returns {Promise<GlobalResponseTypes<T>>}
	 * @example
	 * const result = await actionLibrary.validaciones({
	 * 	"funcionId": "10_003",
	 * 		"codTransaction": "1",
	 * 		"codApp": "1",
	 * 		"dialogoId": "1",
	 * 		"parameters": "1"
	 * 		});
	 */
	public async validaciones<T>(eventObject: ActionObject): Promise<GlobalResponseTypes<T>> {
		debug('validaciones: ', JSON.stringify(eventObject));
		return eventObject as unknown as GlobalResponseTypes<T>;
	}

	/**
	 * @description Acciones de diálogo
	 * @param {ActionObject} eventObject
	 * @returns {Promise<GlobalResponseTypes<T>>}
	 * @example
	 * const result = await actionLibrary.accionesDialog({
	 * 	"funcionId": "10_003",
	 * 		"codTransaction": "1",
	 * 			"codApp": "1",
	 * 			"dialogoId": "1",
	 * 			"parameters": "1"
	 * 			});
	 */
	public async accionesDialog<T>(eventObject: ActionObject): Promise<GlobalResponseTypes<T>> {
		debug('accionesDialog: ', JSON.stringify(eventObject));
		const {funcionId, codTransaction, codApp} = eventObject;
		return getAccionesDialogo<T>({
			funcionId,
			codTransaction: codTransaction!,
			codApp: codApp!,
		});
	}

	/**
	 * @description Eventos de secuencia
	 * @param {ActionObject} eventObject
	 * @returns {Promise<GlobalResponseTypes<T>>}
	 * @example
	 * const result = await actionLibrary.eventosSec({
	 * 	"funcionId": "10_003",
	 * 		"codTransaction": "1",
	 * 		"codApp": "1",
	 * 		"dialogoId": "1",
	 * 		"parameters": "1"
	 * 		});
	 */
	public async eventosSec<T>(eventObject: ActionObject): Promise<GlobalResponseTypes<T>> {
		//  {
		//         "nameMethod": "metodo que ha llamado en el FACADE",
		//         "tipoFunIdMethod": "metodo que tiene que llamar en la libreria",
		//         "secuenciaId": "secuencia de la que partimos",
		//         "funcionId": "Si es menor a 10_000, se refiere a un nodo de la secuencia, si es mayor, es un  evento de la secuencia no visualizable
		//         "tipoFunId": "Nos indica el tipo de funcion a la que hay que llamar"
		//   },
		const {secuenciaId, dialogoId, controlId} = eventObject;
		debug('eventosSec: ', JSON.stringify(eventObject));
		if (this.apiUrl === undefined) {
			error('No se ha definido la URL de la API');
			throw new Error('No se ha definido la URL de la API');
		}

		const result = await fetch(`${this.apiUrl}/nodo/${secuenciaId}/${dialogoId}/${controlId}`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				Charset: 'utf8',
			},
		}).then(async response => response.json());

		result.data = result.data.map((item: SequenceForEvent) => ({
			...item,
			secuenciaIdFrom: item.secuencia_id,
			secuenciaIdTo: item.comp_id,
			tipoId: item.tipo_id,
		}));
		debug('eventosSec result: ', JSON.stringify(result));
		return result;
	}

	/**
	 * @description Funciones de la secuencia
	 * @param {ActionObject} eventObject
	 * @returns {Promise<GlobalResponseTypes<NexoApiObject>>}
	 */
	public async funciones<NexoApiObject>(eventObject: ActionObject): Promise<GlobalResponseTypes<NexoApiObject>> {
		const {funcionId: functionId, tipoFunId: tipoId, parameters} = eventObject;
		if (this.apiUrl === undefined) {
			error('No se ha definido la URL de la API');
			throw new Error('No se ha definido la URL de la API');
		}

		debug('funciones: ', JSON.stringify(eventObject));

		const result = await fetch(`${this.apiUrl}/nexo-api/${functionId}/${tipoId}`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				Charset: 'utf8',
			},
		}).then(async (response: Response) => response.json());

		debug('funciones result: ', JSON.stringify(result), eventObject);

		result.data = result.data.map((item: NexoApiObject) => ({
			...item,
			parametros: parameters?.split(':'),
		}));

		return result;
	}

	/**
	 * @description Llamada intermedia al servicio para recuperar los YAML's
	 * @param {string} app
	 * @param {string} name
	 * @returns {Promise<Response>}
	 */
	public async middleCallService(app: string, name: string): Promise<Response> {
		if (this.apiUrl === undefined) {
			error('No se ha definido la URL de la API');
			throw new Error('No se ha definido la URL de la API');
		}

		return fetch(`${this.apiUrl}/schemas/${app}/${name}`, {method: 'GET'});
	}
}
