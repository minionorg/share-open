/**
 * 从一个字符串的开头和结尾去除空格,如果输入为null,则返回一个空字符串
 *
 * @param {string} str 要剥离的字符串,可能为null
 * @return {string} 修剪后的字符串,如果输入为null,则为空字符串
 * @example
 * stripToEmpty(null) = ''
 * stripToEmpty('') = ''
 * stripToEmpty('   ') = ''
 * stripToEmpty('abc') = 'abc'
 * stripToEmpty('  abc') = 'abc'
 * stripToEmpty('abc  ') = 'abc'
 * stripToEmpty(' abc ') = 'abc'
 * stripToEmpty(' ab c ') = 'ab c'
 */
declare function stripToEmpty(str: string): string;
export default stripToEmpty;
