import { GlobalResponseTypes, SendObject } from './types/send.types.ts';
import { InputObjectNew }                  from '@lib/types/mediator/dll-mediator.types.ts';

export class SendLibrary {
	public async sendProcess<T>(inputObject: SendObject): Promise<GlobalResponseTypes<T>> {
		const { codApp, codTransaction } = inputObject;

		const body = JSON.stringify({
			CONTINUAR: ' ',
		});

		return await fetch(`${import.meta.env.VITE_API_URL}/schema/${codApp}/${codTransaction}`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body,
		}).then((response) => response.json() as Promise<any>);
	}

	/**
	 * @description Execute a process
	 * @building POC
	 * @param {InputObjectNew} inputObject
	 * @returns {Promise<GlobalResponseTypes<T>>}
	 */
	public async execProcess<T>(inputObject: InputObjectNew): Promise<GlobalResponseTypes<T>> {
		const { method, dllId, params } = inputObject;

		const body = JSON.stringify({
			method,
			params,
		});

		//TODO: Llamada a la tabla de las dll para sacar la Dll a la que hay que llamar, ya que no coinciden las de nexoApi con la tabla Dll
		//TODO: Ejecutar la Dll en el browser y devolver el resultado
		return await fetch(`${import.meta.env.VITE_API_URL}/dll/${dllId}`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body,
		}).then((response) => response.json() as Promise<any>);
	}
}
