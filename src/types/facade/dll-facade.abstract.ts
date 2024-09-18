import {type InputObject, type InputObjectNew} from '../mediator';
import {type GlobalResponseTypes} from '../send.types';

export abstract class DllFacadeAbstract {
	public abstract envio<T>(inputObject: InputObject): Promise<GlobalResponseTypes<T>>;
	public abstract dllCall<T>(inputObject: InputObjectNew): Promise<GlobalResponseTypes<T>>;
}
