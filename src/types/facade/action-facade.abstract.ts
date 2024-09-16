import { InputMiddleObject } from '../mediator';
import { GlobalResponseTypes } from '../send.types';

export abstract class ActionFacadeAbstract {
	public abstract call<T>(inputObject: InputMiddleObject): Promise<GlobalResponseTypes<T>>;
}
