/**
 * 检测字符是否为空白
 *
 * @param {string} ch 字符
 * @return {boolean} 空白为真
 * @example
 * isWhitespace(' ') = true
 * isWhitespace('\n') = true
 * isWhitespace('\r') = true
 * isWhitespace('\t') = true
 * isWhitespace('\f') = true
 */
declare function isWhitespace(ch: string): boolean;
export default isWhitespace;
