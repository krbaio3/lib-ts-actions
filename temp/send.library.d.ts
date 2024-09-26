import { type GlobalResponseTypes, type SendObject, type InputObjectNew, SendAbstract } from './types';
export declare class SendLibrary extends SendAbstract {
    sendProcess<T>(inputObject: SendObject): Promise<GlobalResponseTypes<T>>;
    /**
     * @description Execute a process
     * @building POC
     * @param {InputObjectNew} inputObject
     * @returns {Promise<GlobalResponseTypes<T>>}
     */
    execProcess<T>(inputObject: InputObjectNew): Promise<GlobalResponseTypes<T>>;
}
//# sourceMappingURL=send.library.d.ts.map