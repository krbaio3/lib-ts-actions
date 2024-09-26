import { type GlobalResponseTypes } from '../send.types';
import { type InputMiddleObject } from './action-mediator.types';
export declare abstract class ActionMediatorAbstract {
    abstract validaciones<T>(inputObject: InputMiddleObject): Promise<GlobalResponseTypes<T>>;
    abstract accionesDialog<T>(inputObject: InputMiddleObject): Promise<GlobalResponseTypes<T>>;
    abstract eventosSec<T>(inputObject: InputMiddleObject): Promise<GlobalResponseTypes<T>>;
    abstract funciones<T>(inputObject: InputMiddleObject): Promise<GlobalResponseTypes<T>>;
}
//# sourceMappingURL=action-mediator.abstract.d.ts.map