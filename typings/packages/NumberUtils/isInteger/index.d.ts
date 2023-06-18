/**
 * 检查是否符合整数数字
 *
 * @param {string} str 将要检查的字符串
 * @param {boolean} options.zeroes 是否允许整数前面加0,默认允许
 * @param {number} options.min 大于或等于最小值
 * @param {number} options.max 小于或等于最大值
 * @param {number} options.gt 大于最小值
 * @param {number} options.lt 小于最大值
 * @return {boolean}  是否匹配
 * @example
 * isInteger('13') = true
 * isInteger('123') = true
 * isInteger('-01') = true
 * isInteger('000') = true
 * isInteger('123.123') = false
 * isInteger('   ') = false)
 * isInteger('+1', { zeroes: false }) = true
 * isInteger('01', { zeroes: false }) = false
 * isInteger('15', { min: 10 }) = true
 * isInteger('15', { min: 10, max: 15 }) = true
 */
declare function isInteger(str: string, options?: Partial<{
    zeroes: boolean;
    min: number;
    max: number;
    gt: number;
    lt: number;
}>): boolean;
export default isInteger;
