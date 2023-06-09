/**
 * 在字符串中搜索由开始和结束标记分隔的子字符串，以数组返回所有匹配的子字符串
 *
 * @param {string} str 包含子字符串的字符串，可能为null
 * @param {string} open 标识子字符串开头的字符串
 * @param {string} close 标识子字符串开头的字符串
 * @return {(string[] | null)}  以数组返回所有匹配的子字符串,未匹配返回null
 * @example
 * substringsBetween('yabczyabcdz', 'y', 'z') = ['abc', 'abcd']
 * substringsBetween('[a][b][c]', '[', ']') = ['a', 'b', 'c']
 * substringsBetween(null, 'any', 'any') = null
 * substringsBetween('any', null, 'any') = null
 * substringsBetween('any', 'any', null) = null
 * substringsBetween('', '[', ']') = []
 */
declare function substringsBetween(str: string, open: string, close: string): string[] | null;
export default substringsBetween;
