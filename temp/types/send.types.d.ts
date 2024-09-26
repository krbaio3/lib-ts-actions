export type SendObject = {
    codApp: string;
    codTransaction: string;
};
export type ActionObject = {
    nameMethod: string;
    secuenciaId: string;
    funcionId: string;
    tipoFunIdMethod: string;
    controlId: string;
    tipoFunId?: string;
    codTransaction?: string;
    codApp?: string;
    dialogoId?: string;
    parameters?: string;
};
export type SequenceForEvent = {
    secuencia_id: number;
    dialogo_id: number;
    control_id: number;
    evento: number;
    funcion_id: number;
    parametros: string;
    tipo_fun_id: number;
    orden: number;
    variable_salida: number;
    evento_id: number;
    ambito: undefined;
    nodo_id: number;
    tipo_id: number;
    comp_id: number;
    pos_x: number;
    pos_y: number;
};
export type NextSecuence = SequenceForEvent & {
    secuenciaIdFrom: number;
    secuenciaIdTo: number;
    tipoId: string;
};
export type GlobalResponseTypes<T> = {
    data: T | T[];
    ok: boolean;
    error?: {
        message: string;
        name: string;
        stack: string;
    };
};
export type NexoApiObject = {
    tipo_id: number;
    funcion_id: number;
    funcion_nombre: string;
    proceso_nombre: string;
    dll_id: number;
    descripcion: string;
    dll_32: string;
    cod_aplicacion: string;
    parametros: string;
};
//# sourceMappingURL=send.types.d.ts.map