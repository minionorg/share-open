/**
 * 获取最后一次出现分隔符之前的子字符串。不返回分隔符
 *
 * @param {string} str 从中获取子字符串的字符串可能为null
 * @param {(string | number)} separator 要搜索的字符串可能为null
 * @return {string} 最后一次出现分隔符之前的子字符串
 * @example
 * substringBeforeLast(null) = null
 * substringBeforeLast('') = ''
 * substringBeforeLast('abcba', 'b') = 'abc'
 * substringBeforeLast('abc', 'c') = 'ab'
 * substringBeforeLast('a', 'a') = ''
 * substringBeforeLast('a', 'z') = 'a'
 * substringBeforeLast('a', null) = ''
 * substringBeforeLast('a', '') = ''
 */
declare function substringBeforeLast(str: string, separator?: string | number): string;
export default substringBeforeLast;
