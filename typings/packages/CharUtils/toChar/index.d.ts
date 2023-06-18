/**
 * 获取第一个字符
 *
 * @param {string} ch 要转换的字符
 * @return {string} 字符
 * @example
 * toChar(' ')  = ' '
 * toChar('A')  = 'A'
 * toChar(null) = throws TypeError
 */
declare function toChar(ch: string, defaultValue?: string): string;
export default toChar;
