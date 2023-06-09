/**
 * 比较字符串，是否与后面其中一个参数相同(忽略大小写)
 *
 * @author (Set the text for this tag by adding docthis.authorName to your settings file.)
 * @param {string} str 要比较的字符串
 * @param {...string[]} searchStrings 将要匹配的字符串参数集合
 * @return {boolean}  匹配成功
 * @example
 * equalsAnyIgnoreCase(null, '') = false
 * equalsAnyIgnoreCase(null, null, null) = true
 * equalsAnyIgnoreCase(null, 'abc', 'def') = false
 * equalsAnyIgnoreCase('abc', null, 'def') = false
 * equalsAnyIgnoreCase('abc', 'abc', 'def') = true
 * equalsAnyIgnoreCase('abc', 'ABC', 'DEF') = true
 */
declare function equalsAnyIgnoreCase(str: string, ...searchStrings: string[]): boolean;
export default equalsAnyIgnoreCase;
