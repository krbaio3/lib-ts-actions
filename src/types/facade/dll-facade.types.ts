import { DllFacadeAbstract } from './dll-facade.abstract';
import { InputObject } from '../mediator';
import { GlobalResponseTypes } from '../send.types';

export type FacadeMethodKeys = keyof DllFacadeAbstract;
export type FacadeMethodFunction = <T>(inputObject: InputObject) => Promise<GlobalResponseTypes<T>>;
