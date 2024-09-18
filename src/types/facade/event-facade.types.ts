import {type InputMiddleObject} from '../mediator';
import {type GlobalResponseTypes} from '../send.types';

export type EventFacadeMethodFunction = <T>(inputObject: InputMiddleObject) => Promise<GlobalResponseTypes<T>>;
