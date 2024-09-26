import { type ActionObject, type GlobalResponseTypes } from './send.types';
export declare abstract class ActionAbstract {
    readonly apiUrl: string;
    protected constructor(apiUrl: string);
    abstract validaciones<T>(eventObject: ActionObject): Promise<GlobalResponseTypes<T>>;
    abstract accionesDialog<T>(eventObject: ActionObject): Promise<GlobalResponseTypes<T>>;
    abstract eventosSec<T>(eventObject: ActionObject): Promise<GlobalResponseTypes<T>>;
    abstract funciones<T>(eventObject: ActionObject): Promise<GlobalResponseTypes<T>>;
}
export type ActionsMethodKeys = keyof ActionAbstract;
export type ActionsMethodFunction = <T>(actionObject: ActionObject) => Promise<GlobalResponseTypes<T>>;
//# sourceMappingURL=action.abstract.d.ts.map