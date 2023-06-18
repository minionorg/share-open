/**
 * 检查字符是否为 7位ASCII码 中的字母.
 * 资料: https://zh.wikipedia.org/wiki/ASCII
 *
 * @param {string} ch 要检查的字符
 * @return {boolean} 如果介于 65 和 90 或 97 和 122 之间(含),则为真
 * @example
 * isAsciiAlpha('a')  = true
 *.isAsciiAlpha('A')  = true
 * isAsciiAlpha('3')  = false
 * isAsciiAlpha('-')  = false
 * isAsciiAlpha('\n') = false
 * isAsciiAlpha('&copy;') = false
 */
declare function isAsciiAlpha(ch: string): boolean;
export default isAsciiAlpha;
