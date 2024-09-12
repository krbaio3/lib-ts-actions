import { GlobalResponseTypes } from '../send.types.ts';
import { InputMiddleObject }   from './event-mediator.types.ts';

export abstract class ActionMediatorAbstract {
	public abstract validaciones<T>(inputObject: InputMiddleObject): Promise<GlobalResponseTypes<T>>;
	public abstract accionesDialog<T>(inputObject: InputMiddleObject): Promise<GlobalResponseTypes<T>>;
	public abstract eventosSec<T>(inputObject: InputMiddleObject): Promise<GlobalResponseTypes<T>>;
	public abstract funciones<T>(inputObject: InputMiddleObject): Promise<GlobalResponseTypes<T>>;
}
