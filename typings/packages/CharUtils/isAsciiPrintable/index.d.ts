/**
 * 检查字符是否为 7位ASCII码 中可打印字符
 * 资料: https://zh.wikipedia.org/wiki/ASCII
 *
 * @param {string} ch 要检查的字符
 * @return {boolean} 如果在 32 到 126 之间(含),则为真
 * @example
 * isAsciiPrintable('a') = true
 * isAsciiPrintable('A') = true
 * isAsciiPrintable('3') = true
 * isAsciiPrintable('-') = true
 * isAsciiPrintable('\n') = false
 * isAsciiPrintable('&copy;') = true
 */
declare function isAsciiPrintable(ch: string): boolean;
export default isAsciiPrintable;
