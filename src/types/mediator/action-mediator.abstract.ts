import { GlobalResponseTypes } from '../send.types';
import { InputMiddleObject } from './action-mediator.types';

export abstract class ActionMediatorAbstract {
	public abstract validaciones<T>(inputObject: InputMiddleObject): Promise<GlobalResponseTypes<T>>;
	public abstract accionesDialog<T>(inputObject: InputMiddleObject): Promise<GlobalResponseTypes<T>>;
	public abstract eventosSec<T>(inputObject: InputMiddleObject): Promise<GlobalResponseTypes<T>>;
	public abstract funciones<T>(inputObject: InputMiddleObject): Promise<GlobalResponseTypes<T>>;
}
