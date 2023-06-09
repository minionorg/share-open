/**
 * 获取字符串的长度，如果为null则为0
 *
 * @param {string} ch 目标字符串
 * @return {number}  {number} 返回字符串长度，null为0
 * @example
 * length(null) = 0
 * length('') = 0
 * length(' ') = 1
 * length('bob') = 3
 * length('  bob  ') = 7
 */
declare function length(ch: string): number;
export default length;
