/**
 * 检查字符是否为 7位ASCII码 小写字母
 * 资料: https://zh.wikipedia.org/wiki/ASCII
 *
 * @param {string} ch 要检查的字符
 * @return {boolean} 如果介于 97 和 122 之间(含),则为真
 * @example
 * isAsciiAlphaLower('a')  = true
 * isAsciiAlphaLower('A')  = false
 * isAsciiAlphaLower('3')  = false
 * isAsciiAlphaLower('-')  = false
 * isAsciiAlphaLower('\n') = false
 * isAsciiAlphaLower('&copy;') = false
 */
declare function isAsciiAlphaLower(ch: string): boolean;
export default isAsciiAlphaLower;
