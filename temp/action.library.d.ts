import { type ActionObject, type GlobalResponseTypes, ActionAbstract } from './types';
/**
 * @description Clase que implementa la lógica de las acciones de la librería.
 * @class
 * @extends ActionAbstract
 * @param {string} apiUrl - URL de la API
 * @example
 * const actionLibrary = new ActionLibrary('http://localhost:3000');
 */
export declare class ActionLibrary extends ActionAbstract {
    /**
     * @constructor
     * @param {string} apiUrl - URL de la API
     * @example
     * const actionLibrary = new ActionLibrary('http://localhost:3000');
     */
    constructor(apiUrl: string);
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
    validaciones<T>(eventObject: ActionObject): Promise<GlobalResponseTypes<T>>;
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
    accionesDialog<T>(eventObject: ActionObject): Promise<GlobalResponseTypes<T>>;
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
    eventosSec<T>(eventObject: ActionObject): Promise<GlobalResponseTypes<T>>;
    /**
     * @description Funciones de la secuencia
     * @param {ActionObject} eventObject
     * @returns {Promise<GlobalResponseTypes<NexoApiObject>>}
     */
    funciones<NexoApiObject>(eventObject: ActionObject): Promise<GlobalResponseTypes<NexoApiObject>>;
    /**
     * @description Llamada intermedia al servicio para recuperar los YAML's
     * @param {string} app
     * @param {string} name
     * @returns {Promise<Response>}
     */
    middleCallService(app: string, name: string): Promise<Response>;
}
//# sourceMappingURL=action.library.d.ts.map