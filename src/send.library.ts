import {
	type GlobalResponseTypes, type SendObject, type InputObjectNew, SendAbstract,
} from './types';

export class SendLibrary extends SendAbstract {
	public async sendProcess<T>(inputObject: SendObject): Promise<GlobalResponseTypes<T>> {
		const {codApp, codTransaction} = inputObject;

		const body = JSON.stringify({
			CONTINUAR: ' ',
		});

		return fetch(`${this.apiUrl}/schema/${codApp}/${codTransaction}`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body,
		}).then(async response => response.json());
	}

	/**
	 * @description Execute a process
	 * @building POC
	 * @param {InputObjectNew} inputObject
	 * @returns {Promise<GlobalResponseTypes<T>>}
	 */
	public async execProcess<T>(inputObject: InputObjectNew): Promise<GlobalResponseTypes<T>> {
		const {method, dllId, params} = inputObject;

		const body = JSON.stringify({
			method,
			params,
		});

		// TODO: Llamada a la tabla de las dll para sacar la Dll a la que hay que llamar, ya que no coinciden las de nexoApi con la tabla Dll
		// TODO: Ejecutar la Dll en el browser y devolver el resultado
		return fetch(`${this.apiUrl}/dll/${dllId}`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body,
		}).then(async response => response.json());
	}
}
