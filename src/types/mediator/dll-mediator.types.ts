import { DllMediatorAbstract } from './dll-mediator.abstract';
import { GlobalResponseTypes } from '../send.types';

export type InputObject = {
	dllId: string | number;
	dll32: string;
	name: string;
	secuenciaId: string;
	codTransaction?: string;
	codApp?: string;
};
export type MediatorMethodKeys = keyof DllMediatorAbstract;
export type MediatorMethodFunction = <T>(inputObject: InputObject) => Promise<GlobalResponseTypes<T>>;

export type InputObjectNew = {
	dllId: string | number;
	params: string;
	apiUrl: string;
	method?: string;
	extraParams?: string;
};
