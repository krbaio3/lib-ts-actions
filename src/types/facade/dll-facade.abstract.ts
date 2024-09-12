import { InputObject, InputObjectNew } from '../mediator/dll-mediator.types.ts';
import { GlobalResponseTypes }         from '../send.types.ts';

export abstract class DllFacadeAbstract {
	public abstract envio<T>(inputObject: InputObject): Promise<GlobalResponseTypes<T>>;
	public abstract dllCall<T>(inputObject: InputObjectNew): Promise<GlobalResponseTypes<T>>;
}
