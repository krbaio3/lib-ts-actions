import { type InputObject, type InputObjectNew } from '../mediator';
import { type GlobalResponseTypes } from '../send.types';
export declare abstract class DllFacadeAbstract {
    abstract envio<T>(inputObject: InputObject): Promise<GlobalResponseTypes<T>>;
    abstract dllCall<T>(inputObject: InputObjectNew): Promise<GlobalResponseTypes<T>>;
}
//# sourceMappingURL=dll-facade.abstract.d.ts.map