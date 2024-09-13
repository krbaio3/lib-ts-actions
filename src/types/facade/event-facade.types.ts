import { InputMiddleObject } from '../mediator';
import { GlobalResponseTypes } from '../send.types';

export type EventFacadeMethodFunction = <T>(inputObject: InputMiddleObject) => Promise<GlobalResponseTypes<T>>;
