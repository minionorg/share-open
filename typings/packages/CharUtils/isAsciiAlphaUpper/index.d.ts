/**
 * 检查字符是否为 7位ASCII码 中大写字母
 * 资料: https://zh.wikipedia.org/wiki/ASCII
 *
 * @param {string} ch 要检查的字符
 * @return {boolean} 如果介于 65 和 90 之间(含),则为真
 * @example
 * isAsciiAlphaUpper('a')  = false
 * isAsciiAlphaUpper('A')  = true
 * isAsciiAlphaUpper('3')  = false
 * isAsciiAlphaUpper('-')  = false
 * isAsciiAlphaUpper('\n') = false
 * isAsciiAlphaUpper('&copy;') = false
 */
declare function isAsciiAlphaUpper(ch: string): boolean;
export default isAsciiAlphaUpper;
