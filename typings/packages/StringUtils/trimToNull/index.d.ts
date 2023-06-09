/**
 * 移除字符串前后空格, 为空字符串返回null
 *
 * @param {string} str 要修剪的字符串，可以为null
 * @return {*}  {string} 修剪后的字符串，空字符串为null
 * @example
 * trimToNull(null) = null
 * trimToNull('') = null
 * trimToNull('     ') = null
 * trimToNull('abc') = 'abc'
 * trimToNull('    abc    ') = 'abc'
 */
declare function trimToNull(str: string): string;
export default trimToNull;
