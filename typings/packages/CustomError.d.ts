export default class CustomError extends Error {
    constructor(...params: any[]);
}
export declare function messageHoc(methodName: string): (message: string) => string;
