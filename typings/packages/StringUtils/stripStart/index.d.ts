/**
 * 从字符串的开头去除一组字符中的任何一个
 * null则返回null
 * 空字符串返回空字符串
 *
 * @param {string} str 要从中删除字符的字符串,可以为 null
 * @param {string} stripChars 要删除的字符,默认为null
 * @return {string} 剥离的字符串
 * @example
 * stripStart(null) = null
 * stripStart('') = ''
 * stripStart('abc', '') = 'abc'
 * stripStart('abc', null) = 'abc'
 * stripStart('  abc', null) = 'abc'
 * stripStart('abc  ', null) = 'abc  '
 * stripStart(' abc ', null) = 'abc '
 * stripStart('yxabc  ', 'xyz') = 'abc  '
 */
declare function stripStart(str: string, stripChars?: string): string;
export default stripStart;
