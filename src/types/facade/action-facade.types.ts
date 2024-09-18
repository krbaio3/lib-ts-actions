import {type GlobalResponseTypes} from '../send.types';
import {type InputMiddleObject} from '../mediator';
import {type ActionFacadeAbstract} from './action-facade.abstract';

export type ActionFacadeMethodKeys = keyof ActionFacadeAbstract;
export type ActionFacadeMethodFunction = <T>(inputObject: InputMiddleObject) => Promise<GlobalResponseTypes<T>>;
