import { DllMediatorAbstract } from './dll-mediator.abstract.ts';
import { GlobalResponseTypes } from '../send.types.ts';

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
	method?: string;
	dllId: string | number;
	params: string;
	extraParams?: string;
};
