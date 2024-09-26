import { type GlobalResponseTypes } from './types';
/**
 * @description Obtiene las acciones de diálogo
 * @param {string} funcionId dependiendo del valor puede ser una accion (tabla accion),
 * un evento no visualizable (tabla eventos_sec) una funcion de la tabla nexo_api o un evento
 * de la tabla eventos
 * @param {string} codTransaction Es el codigo de Transaccion
 * @returns {Promise<GlobalResponseTypes<T>>} Retorna un objeto con la respuesta de la petición
 */
export declare function getAccionesDialogo<T>({ funcionId, }: {
    funcionId: string | number;
    codTransaction: string;
    codApp: string;
}): Promise<GlobalResponseTypes<T>>;
//# sourceMappingURL=action-dialog.library.d.ts.map