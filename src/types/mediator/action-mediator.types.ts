import { ActionMediatorAbstract } from './action-mediator.abstract';

export type InputMiddleObject = {
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

export type ActionMediatorMethodKeys = keyof ActionMediatorAbstract;
