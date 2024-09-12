import { InputMiddleObject }   from '../mediator/action-mediator.types.ts';
import { GlobalResponseTypes } from '../send.types.ts';

export abstract class ActionFacadeAbstract {
	public abstract call<T>(inputObject: InputMiddleObject): Promise<GlobalResponseTypes<T>>;
}
