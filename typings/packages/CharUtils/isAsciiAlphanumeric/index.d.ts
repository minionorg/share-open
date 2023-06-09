/**
 * 检查字符是否为 7位ASCII码 中的字母和数字
 *
 * @param {string} ch 要检查的字符
 * @return {*}  {boolean} 如果介于 48 和 57 或 65 和 90 或 97 和 122 之间（含），则为真
 * @link https://zh.wikipedia.org/wiki/ASCII
 * @example
 * isAsciiAlphanumeric('a')  = true
 * isAsciiAlphanumeric('A')  = true
 * isAsciiAlphanumeric('3')  = true
 * isAsciiAlphanumeric('-')  = false
 * isAsciiAlphanumeric('\n') = false
 * isAsciiAlphanumeric('&copy;') = false
 */
declare function isAsciiAlphanumeric(ch: string): boolean;
export default isAsciiAlphanumeric;
