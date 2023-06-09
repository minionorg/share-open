/**
 * 移除字符串后边空格
 *
 * @param {string} str 将要移除的字符串
 * @return {string} 移除后的字符串，可能为null
 * @example
 * rtrim(null) = null)
 * rtrim('') = ''
 * rtrim('     ') = ''
 * rtrim('abc') = 'abc'
 * rtrim('    abc') = '    abc'
 * rtrim('abc    ') = 'abc'
 * rtrim('    abc    ') = '    abc'
 * rtrim('ab c') = 'ab c')
 * rtrim(' ab c ') = ' ab c'
 */
declare function rtrim(str: string): string;
export default rtrim;
