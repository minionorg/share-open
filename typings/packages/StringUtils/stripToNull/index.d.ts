/**
 * 从一个字符串的开头和结尾剥离空白,如果剥离后是空的(""),则返回 null
 *
 * @param {string} str 要剥离的字符串,可能为null
 * @return {string} 剥离后的字符串,如果输入的是空白或null或空的字符串返回null
 * @example
 * stripToNull(null) = null
 * stripToNull('') = null
 * stripToNull('   ') = null
 * stripToNull('abc') = 'abc'
 * stripToNull('  abc') = 'abc'
 * stripToNull('abc  ') = 'abc'
 * stripToNull(' abc ') = 'abc'
 * stripToNull(' ab c ') = 'ab c'
 */
declare function stripToNull(str: string): string;
export default stripToNull;
