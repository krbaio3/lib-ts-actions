import { type InputMiddleObject } from '../mediator';
import { type GlobalResponseTypes } from '../send.types';
export declare abstract class ActionFacadeAbstract {
    abstract call<T>(inputObject: InputMiddleObject): Promise<GlobalResponseTypes<T>>;
}
//# sourceMappingURL=action-facade.abstract.d.ts.map