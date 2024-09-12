import { DllFacadeAbstract }   from './dll-facade.abstract.ts';
import { InputObject }         from '../mediator/dll-mediator.types.ts';
import { GlobalResponseTypes } from '../send.types.ts';

export type FacadeMethodKeys = keyof DllFacadeAbstract;
export type FacadeMethodFunction = <T>(inputObject: InputObject) => Promise<GlobalResponseTypes<T>>;
