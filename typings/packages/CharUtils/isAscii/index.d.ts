/**
 * 检查字符是否为 7位ASCII码 表中
 *
 * @param {string} ch 要检查的字符
 * @return {*}  {boolean} 如果小于 128，则为真
 * @link https://zh.wikipedia.org/wiki/ASCII
 * @example
 * isAscii('a')  = false
 * isAscii('A')  = false
 * isAscii('3')  = false
 * isAscii('-')  = false
 * isAscii('\n') = true
 * isAscii('&copy;') = true
 * isAscii('【') = false
 */
declare function isAscii(ch: string): boolean;
export default isAscii;
