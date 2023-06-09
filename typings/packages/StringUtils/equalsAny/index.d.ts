/**
 * 比较字符串，是否与后面其中一个参数相同
 *
 * @param {string} str 要比较的字符串
 * @param {...string[]} searchStrings 将要匹配的字符串参数集合
 * @return {boolean} 匹配全等成功
 * @example
 * equalsAny(null, '') = false
 * equalsAny(null, null, null) = true
 * equalsAny(null, 'abc', 'def') = false
 * equalsAny('abc', null, 'def') = false
 * equalsAny('abc', 'abc', 'def') = true
 * equalsAny('abc', 'ABC', 'DEF') = false
 * equalsAny('ABC', 'DEF', 'ABC') = true
 */
declare function equalsAny(str: string, ...searchStrings: string[]): boolean;
export default equalsAny;
