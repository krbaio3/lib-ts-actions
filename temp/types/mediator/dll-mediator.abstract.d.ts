import { type InputObject } from './dll-mediator.types';
import { type GlobalResponseTypes } from '../send.types';
export declare abstract class DllMediatorAbstract {
    abstract proceso<T>(inputObject: InputObject): Promise<GlobalResponseTypes<T>>;
    abstract condicion<T>(inputObject: InputObject): Promise<GlobalResponseTypes<T>>;
    abstract informe<T>(inputObject: InputObject): Promise<GlobalResponseTypes<T>>;
}
//# sourceMappingURL=dll-mediator.abstract.d.ts.map