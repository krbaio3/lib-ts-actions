export class NamPlusLibrary {
	public async getDetails(conditionId: string): Promise<string> {
		// Simulación de una operación asíncrona
		return new Promise(resolve => {
			setTimeout(() => {
				resolve(`Detalles asíncronos para la condición ${conditionId}`);
			}, 0); // Simula un retraso de 1 segundo
		});
	}
}
