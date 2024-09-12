import { InputMiddleObject } from '../mediator/event-mediator.types.ts';
import { EventFacadeAbstract } from './event-facade.abstract.ts';
import { GlobalResponseTypes } from '../send.types.ts';

export type EventFacadeMethodKeys = keyof EventFacadeAbstract;
export type EventFacadeMethodFunction = <T>(inputObject: InputMiddleObject) => Promise<GlobalResponseTypes<T>>;
