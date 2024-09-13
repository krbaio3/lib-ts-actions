import { GlobalResponseTypes } from '../send.types';
import { InputMiddleObject } from '../mediator';
import { ActionFacadeAbstract } from './action-facade.abstract';

export type ActionFacadeMethodKeys = keyof ActionFacadeAbstract;
export type ActionFacadeMethodFunction = <T>(inputObject: InputMiddleObject) => Promise<GlobalResponseTypes<T>>;
