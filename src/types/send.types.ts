export type SendObject = { codApp: string; codTransaction: string };
export type ActionObject = {
	nameMethod: string;
	secuenciaId: string;
	funcionId: string;
	tipoFunIdMethod: string;
	tipoFunId?: string;
	codTransaction?: string;
	codApp?: string;
	dialogoId?: string;
	parameters?: string;
};

export type SequenceForEvent = {
	nodo_id: number;
	tipo_id: number;
	node_parametros: string;
};

export type GlobalResponseTypes<T> = {
	data: T | [];
	ok: boolean;
	error?: {
		message: string;
		name: string;
		stack: string;
	};
};

export type NexoApiObject = {
	tipo_id: number;
	funcion_id: number;
	funcion_nombre: string;
	proceso_nombre: string;
	dll_id: number;
	descripcion: string;
	dll_32: string;
	cod_aplicacion: string;
	parametros: string;
};
