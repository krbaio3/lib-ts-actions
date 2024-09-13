import { GlobalResponseTypes, SendObject } from './send.types';
import { InputObjectNew } from './mediator';

export abstract class SendAbstract {
	public readonly apiUrl: string;
	protected constructor(apiUrl: string) {
		this.apiUrl = apiUrl;
	}
	public abstract sendProcess<T>(inputObject: SendObject): Promise<GlobalResponseTypes<T>>;
	public abstract execProcess<T>(inputObject: InputObjectNew): Promise<GlobalResponseTypes<T>>;
}
