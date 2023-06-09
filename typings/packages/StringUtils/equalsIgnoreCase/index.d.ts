/**
 * 比较两个字符串是否全等, 忽略大小写
 *
 * @param {string} cs1 字符串1
 * @param {string} cs2 字符串2
 * @return {boolean} 是否相同
 * @example
 * equalsIgnoreCase(null, null) = true
 * equalsIgnoreCase(null, 'abc') = false
 * equalsIgnoreCase('abc', null) = false
 * equalsIgnoreCase('abc', 'abc') = true
 * equalsIgnoreCase('abc', 'ABC') = true
 */
declare function equalsIgnoreCase(cs1: string, cs2: string): boolean;
export default equalsIgnoreCase;
