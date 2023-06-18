/**
 * 获取嵌套在两个字符串之间的字符串,只返回第一个匹配项
 *
 * @param {string} str 包含子字符串的字符串可能为null
 * @param {string} open 子字符串之前的字符串,可以为null
 * @param {string} close 子字符串之后的字符串,可以为null
 * @return {string}  子字符串,如果不匹配返回null
 * @example
 * substringBetween('wx[b]yz', '[', ']') = 'b'
 * substringBetween(null, 'any', 'any') = null
 * substringBetween('any', null, 'any') = null
 * substringBetween('any', 'any', null) = null
 * substringBetween('', '', '') = ''
 * substringBetween('', '', ']') = null
 * substringBetween('', '[', ']') = null
 * substringBetween('yabcz', '', '') = ''
 * substringBetween('yabcz', 'y', 'z') = 'abc'
 * substringBetween('yabczyabcz', 'y', 'z') = 'abc'
 * substringBetween('yabczyabcz', 'ya', 'cz') = 'b'
 */
declare function substringBetween(str: string, open: string, close: string): string;
export default substringBetween;
