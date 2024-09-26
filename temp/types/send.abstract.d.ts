import { type GlobalResponseTypes, type SendObject } from './send.types';
import { type InputObjectNew } from './mediator';
export declare abstract class SendAbstract {
    readonly apiUrl: string;
    constructor(apiUrl: string);
    abstract sendProcess<T>(inputObject: SendObject): Promise<GlobalResponseTypes<T>>;
    abstract execProcess<T>(inputObject: InputObjectNew): Promise<GlobalResponseTypes<T>>;
}
//# sourceMappingURL=send.abstract.d.ts.map