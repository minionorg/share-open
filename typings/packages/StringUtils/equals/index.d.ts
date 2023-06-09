/**
 * 比较两个字符串是否全等
 *
 * @param {string} cs1 字符串1
 * @param {string} cs2 字符串2
 * @return {boolean}  是否全等
 * @example
 * equals(null, null) = true
 * equals(null, 'abc') = false
 * equals('abc', null) = false
 * equals('abc', 'abc') = true
 * equals('abc', 'ABC') = false
 */
declare function equals(cs1: string, cs2: string): boolean;
export default equals;
