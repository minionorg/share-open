/**
 * 检查字符是否为 7位ASCII码 表中
 * 资料: https://zh.wikipedia.org/wiki/ASCII
 *
 * @param {string} ch 要检查的字符
 * @return {boolean} 如果小于128,则为真
 * @example
 * isAscii('a')  = false
 * isAscii('A')  = false
 * isAscii('3')  = false
 * isAscii('-')  = false
 * isAscii('\n') = true
 * isAscii('&copy;') = true
 */
declare function isAscii(ch: string): boolean;
export default isAscii;
