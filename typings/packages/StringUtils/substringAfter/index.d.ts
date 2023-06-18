/**
 * 获取第一次出现分隔符之后的子字符串,不返回分隔符
 *
 * @param {string} str 从中获取子字符串的字符串可能为null
 * @param {(string | number)} separator 要搜索的字符串可能为null,默认为null
 * @return {string} 第一次出现分隔符之后的子字符串
 * @example
 * substringAfter(null) = null
 * substringAfter('') = ''
 * substringAfter('abc', 'a') = 'bc'
 * substringAfter('abcba', 'b') = 'cba'
 * substringAfter('abc', 'c') = ''
 * substringAfter('abc', 'd') = ''
 * substringAfter(' abc', 32) = 'abc'
 */
declare function substringAfter(str: string, separator?: string | number): string;
export default substringAfter;
