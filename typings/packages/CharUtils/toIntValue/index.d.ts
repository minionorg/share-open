/**
 * 将字符转换为它所表示的整数，如果字符不是数字则抛出异常
 *
 * @param {string} ch 要转换的字符
 * @param {*} defaultValue 如果字符不是数字，则使用的默认值
 * @return {*} 字符的整型值
 * @example
 * toIntValue('3')  = 3
 * toIntValue('A')  = throws RangeError
 * toIntValue('3', -1)  = 3
 * toIntValue('A', -1)  = -1
 */
declare function toIntValue(ch: string, defaultValue?: any): number;
export default toIntValue;
