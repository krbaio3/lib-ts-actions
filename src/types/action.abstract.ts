import { ActionObject, GlobalResponseTypes } from './send.types';

export abstract class ActionAbstract {
	public readonly apiUrl: string;
	protected constructor(apiUrl: string) {
		this.apiUrl = apiUrl;
		this.validaciones = this.validaciones.bind(this);
		this.accionesDialog = this.accionesDialog.bind(this);
		this.eventosSec = this.eventosSec.bind(this);
		this.funciones = this.funciones.bind(this);
	}
	public abstract validaciones<T>(eventObject: ActionObject): Promise<GlobalResponseTypes<T>>;
	public abstract accionesDialog<T>(eventObject: ActionObject): Promise<GlobalResponseTypes<T>>;
	public abstract eventosSec<T>(eventObject: ActionObject): Promise<GlobalResponseTypes<T>>;
	public abstract funciones<T>(eventObject: ActionObject): Promise<GlobalResponseTypes<T>>;
}

export type ActionsMethodKeys = keyof ActionAbstract;
export type ActionsMethodFunction = <T>(actionObject: ActionObject) => Promise<GlobalResponseTypes<T>>;
