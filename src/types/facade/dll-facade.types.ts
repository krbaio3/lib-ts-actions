import {type DllFacadeAbstract} from './dll-facade.abstract';
import {type InputObject} from '../mediator';
import {type GlobalResponseTypes} from '../send.types';

export type FacadeMethodKeys = keyof DllFacadeAbstract;
export type FacadeMethodFunction = <T>(inputObject: InputObject) => Promise<GlobalResponseTypes<T>>;
