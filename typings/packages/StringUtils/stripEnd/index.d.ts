/**
 * 从字符串的结尾去除一组字符中的任何一个
 *
 * @param {string} str 要从中删除字符的字符串,可以为 null
 * @param {string} stripChars 要删除的字符,默认为null
 * @return {string} 剥离的字符串
 * @example
 * stripEnd(null) = null
 * stripEnd('') = ''
 * stripEnd('abc', '') ='abc'
 * stripEnd('abc', null) ='abc'
 * stripEnd('  abc', null) ='  abc'
 * stripEnd('abc  ', null) = 'abc'
 * stripEnd(' abc ', null) = ' abc'
 * stripEnd('yxabc  ', 'xyz') = 'yxabc  '
 * stripEnd('  abcyx', 'xyz') = '  abc'
 * stripEnd('120.00', '.0') = '12'
 */
declare function stripEnd(str: string, stripChars?: string): string;
export default stripEnd;
