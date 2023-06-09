/**
 * 用字符包裹字符串
 *
 * @author (Set the text for this tag by adding docthis.authorName to your settings file.)
 * @param {string} str 要包装的字符串可以是null
 * @param {string} wrapWith 将包装的字符
 * @return {string} 包裹后的字符串
 * @example
 * wrap(null, 'any') = null
 * wrap('', 'any') = ''
 * wrap('ab', '') = 'ab'
 * wrap('ab', null) = 'ab'
 * wrap('ab', 'x') = 'xabx'
 * wrap('ab', "'") = "'ab'"
 * wrap('"ab"', '"') = '""ab""'
 */
declare function wrap(str: string, wrapWith: string): string;
export default wrap;
