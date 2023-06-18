/**
 * 移除字符串前边空格
 *
 * @param {string} str 将要移除的字符串
 * @return {string}  移除后的字符串,可能为null
 * @example
 * trim(null) = null
 * trim('') = ''
 * trim('     ') = ''
 * trim('abc') = 'abc'
 * trim('    abc    ') = 'abc    '
 */
declare function ltrim(str: string): string;
export default ltrim;
