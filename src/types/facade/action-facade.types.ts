import { GlobalResponseTypes }  from '../send.types.ts';
import { InputMiddleObject }    from '../mediator/action-mediator.types.ts';
import { ActionFacadeAbstract } from './action-facade.abstract.ts';

export type ActionFacadeMethodKeys = keyof ActionFacadeAbstract;
export type ActionFacadeMethodFunction = <T>(inputObject: InputMiddleObject) => Promise<GlobalResponseTypes<T>>;
