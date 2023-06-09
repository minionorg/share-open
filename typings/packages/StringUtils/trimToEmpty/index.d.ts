/**
 * 移除字符串前后空格, 如果null输入，则为空字符串
 *
 * @param {string} str 要修剪的字符串，可以为null
 * @return {*}  {string} 修剪后的字符串，如果null输入，则为空字符串
 * @example
 * trimToEmpty(null) = ''
 * trimToEmpty('') = ''
 * trimToEmpty('     ') = ''
 * trimToEmpty('abc') = 'abc'
 * trimToEmpty('    abc    ') = 'abc'
 */
declare function trimToEmpty(str: string): string;
export default trimToEmpty;
