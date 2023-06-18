/**
 * 字符串前后去除空格
 *
 * @param {string} str 要修剪的字符串,可以为空
 * @return {string} 除去空格后的字符串,可能为null
 * @example
 * trim(null) = null
 * trim('') = ''
 * trim('     ') = ''
 * trim('abc') = 'abc'
 * trim('    abc    ') = 'abc'
 */
declare function trim(str: string): string;
export default trim;
