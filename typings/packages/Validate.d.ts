export default class Validate {
    private static DEFAULT_NOT_NAN_EX_MESSAGE;
    constructor();
    static notNull<T>(param: T, message?: string): void;
    static notEmpty(str: string, message?: string): void;
    static errMsg(methodName: string): (message: string) => string;
    static isString(str: string): string;
    static isValidDateFormat(format: string): boolean;
    static isTimeFormat(format: string): boolean;
}
