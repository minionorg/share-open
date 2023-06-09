/**
 * 从字符串的开头和结尾去除一组字符中的任何一个
 *
 * @param {string} str 要从中删除字符的字符串，可以为 null
 * @param {string} stripChars 要删除的字符，默认为null即空格
 * @return {*}  {string} 剥离的字符串
 * @example
 * strip(null) = null
 * strip('') = ''
 * strip('abc', null) = 'abc'
 * strip('  abc', null) = 'abc'
 * strip('abc  ', null) = 'abc'
 * strip(' abc ', null) = 'abc'
 * strip('  abcyx', 'xyz') = '  abc'
 * strip('  yzabcyx', 'xyz') = '  yzabc'
 * strip('yzabcyx', 'xyz') = 'abc'
 */
declare function strip(str: string, stripChars?: string): string;
export default strip;
