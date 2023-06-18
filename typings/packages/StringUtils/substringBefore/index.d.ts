/**
 * 获取第一次出现分隔符之前的子字符串,不返回分隔符
 *
 * @param {string} str 从中获取子字符串的字符串可能为null
 * @param {(string | number)} separator 要搜索的字符串可能为null
 * @return {string} 第一次出现分隔符之前的子字符串
 * @example
 * substringBefore(null) = null
 * substringBefore('') = ''
 * substringBefore('abc', 'a') = ''
 * substringBefore(' bc', 32) = ''
 * substringBefore('abcba', 'b') = 'a'
 * substringBefore('abc', 'c') = 'ab'
 * substringBefore('a', 'a') = ''
 * substringBefore('a', 'z') = 'a'
 * substringBefore('abc', '') = ''
 * substringBefore('abc', null) = ''
 */
declare function substringBefore(str: string, separator?: string | number): string;
export default substringBefore;
