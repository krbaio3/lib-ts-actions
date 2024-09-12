import { InputObject }         from './dll-mediator.types.ts';
import { GlobalResponseTypes } from '../send.types.ts';

export abstract class DllMediatorAbstract {
	public abstract proceso<T>(inputObject: InputObject): Promise<GlobalResponseTypes<T>>;
	public abstract condicion<T>(inputObject: InputObject): Promise<GlobalResponseTypes<T>>;
	public abstract informe<T>(inputObject: InputObject): Promise<GlobalResponseTypes<T>>;
}
