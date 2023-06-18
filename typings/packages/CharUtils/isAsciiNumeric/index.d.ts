/**
 * 检查字符是否为 7位ASCII码 中的数字
 * 资料: https://zh.wikipedia.org/wiki/ASCII
 *
 * @param {string} ch 字符
 * @return {boolean} 如果介于 48 和 57 之间(含),则为真
 * @example
 * isAsciiNumeric('a')  = false
 * isAsciiNumeric('A')  = false
 * isAsciiNumeric('3')  = true
 * isAsciiNumeric('-')  = false
 * isAsciiNumeric('\n')  = false
 * isAsciiNumeric('&copy;') = false
 */
declare function isAsciiNumeric(ch: string): boolean;
export default isAsciiNumeric;
