/**
 * 检查字符是否为 7位ASCII码 中的控制字符或通信专用字符
 *
 * @param {string} ch 要检查的字符
 * @return {*}  {boolean} 如果小于 32 或等于 127，则为真
 * @link https://zh.wikipedia.org/wiki/ASCII
 * @example
 * isAsciiControl('a')  = false
 * isAsciiControl('A')  = false
 * isAsciiControl('3')  = false
 * isAsciiControl('-')  = false
 * isAsciiControl('\n') = true
 * isAsciiControl('&copy;') = false
 */
declare function isAsciiControl(ch: string): boolean;
export default isAsciiControl;
