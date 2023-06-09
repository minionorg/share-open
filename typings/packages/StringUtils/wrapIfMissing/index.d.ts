/**
 * 如果给定字符串的开头或结尾缺少字符串，则用字符串包裹该字符串
 *
 * @param {string} str 要包装的字符串可以是null
 * @param {string} wrapWith 将包装的字符
 * @return {string}  包裹后的字符串
 * @example
 * wrapIfMissing(null, 'any') = null
 * wrapIfMissing('', 'any') = ''
 * wrapIfMissing('ab', null) = 'ab'
 * wrapIfMissing('ab', 'x') = 'xabx'
 * wrapIfMissing('ab', '"') = '"ab"'
 * wrapIfMissing('"ab"', '"') = '"ab"'
 * wrapIfMissing('ab', "'") = "'ab'"
 * wrapIfMissing("'abcd'", "'") = "'abcd'"
 * wrapIfMissing('"abcd"', "'") = '\'"abcd"\''
 * wrapIfMissing("'abcd'", '"') = '"\'abcd\'"'
 * wrapIfMissing('/', '/') = '/'
 * wrapIfMissing('a/b/c', '/') = '/a/b/c/'
 * wrapIfMissing('/a/b/c', '/') = '/a/b/c/'
 * wrapIfMissing('a/b/c/', '/') = '/a/b/c/'
 */
declare function wrapIfMissing(str: string, wrapWith: string): string;
export default wrapIfMissing;
