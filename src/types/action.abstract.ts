import { ActionObject, GlobalResponseTypes } from './send.types';

export abstract class ActionAbstract {
	public abstract validaciones<T>(eventObject: ActionObject): Promise<GlobalResponseTypes<T>>;
	public abstract accionesDialog<T>(eventObject: ActionObject): Promise<GlobalResponseTypes<T>>;
	public abstract eventosSec<T>(eventObject: ActionObject): Promise<GlobalResponseTypes<T>>;
	public abstract funciones<T>(eventObject: ActionObject): Promise<GlobalResponseTypes<T>>;
}

export type ActionsMethodKeys = keyof ActionAbstract;
export type ActionsMethodFunction = <T>(actionObject: ActionObject) => Promise<GlobalResponseTypes<T>>;
