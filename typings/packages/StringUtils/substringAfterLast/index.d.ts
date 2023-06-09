/**
 * 获取最后一次出现分隔符后的子字符串。不返回分隔符
 *
 * @param {string} str 从中获取子字符串的字符串可能为null
 * @param {string} separator 要搜索的字符串可能为null
 * @return {string} 最后一次出现分隔符后的子字符串
 * @example
 * substringAfterLast(null) = null
 * substringAfterLast('') = ''
 * substringAfterLast('abc', 'a') = 'bc'
 * substringAfterLast(' bc', 32) = 'bc'
 * substringAfterLast('abcba', 'b') = 'a'
 * substringAfterLast('abc', 'c') = ''
 * substringAfterLast('a', 'a') = ''
 * substringAfterLast('a', 'z') = ''
 */
declare function substringAfterLast(str: string, separator?: string | number): string;
export default substringAfterLast;
