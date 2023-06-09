/**
 * 判断字符串是否浮点型数字
 *
 * @param {string} str 将要检查的字符串
 * @param {number} options.min 大于或等于最小值
 * @param {number} options.max 小于或等于最大值
 * @param {number} options.gt 大于最小值
 * @param {number} options.lt 小于最大值
 * @return {boolean}  是否符合
 * @example
 * isFloat('123') = true
 * isFloat('123.123') = true
 * isFloat('+') = false
 * isFloat('3.888', { min: 3.7 }) = true
 * isFloat('3.92', { min: 3.7 }) = true
 * isFloat('0.1', { min: 0.1, max: 1.0 }) = true
 * isFloat('0', { min: 0.1, max: 1.0 }) = false
 * isFloat('9.9', { gt: -5.5, lt: 10 }) = true
 * isFloat('10', { gt: -5.5, lt: 10 }) = false
 * isFloat('9.99999', { min: -5.5, max: 10, gt: -5.5, lt: 10 }) = true
 * isFloat('10', { min: -5.5, max: 10, gt: -5.5, lt: 10 }) = false
 */
declare function isFloat(str: string, options?: Partial<{
    min: number;
    max: number;
    lt: number;
    gt: number;
}>): boolean;
export default isFloat;
