/**
 * 数组中的每一个字符串元素的开头和结尾去除一组字符中的任何一个
 *
 * @param {string[]} strs 要从中删除字符的数组,可以为 null
 * @param {string} stripChars 要删除的字符,默认为null,null 被视为空格
 * @return {string[]} 删除后的数组
 * @example
 * stripAll(null) = null
 * stripAll([]) = []
 * stripAll(['abc', '  abc'], null) = ['abc', 'abc']
 * stripAll(['abc  ', null], null) = ['abc', null]
 * stripAll(['abc  ', null], 'yz') = ['abc  ', null]
 * stripAll(['yabcz', null], 'yz') = ['abc', null]
 */
declare function stripAll(strs: string[], stripChars?: string): string[];
export default stripAll;
