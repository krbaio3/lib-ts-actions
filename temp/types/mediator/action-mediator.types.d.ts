import { type ActionMediatorAbstract } from './action-mediator.abstract';
export type InputMiddleObject = {
    nameMethod: string;
    secuenciaId: string;
    funcionId: string;
    tipoFunIdMethod: string;
    controlId?: string;
    tipoFunId?: string;
    codTransaction?: string;
    codApp?: string;
    dialogoId?: string;
    parameters?: string;
};
export type ActionMediatorMethodKeys = keyof ActionMediatorAbstract;
//# sourceMappingURL=action-mediator.types.d.ts.map