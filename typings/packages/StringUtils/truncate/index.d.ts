/**
 * 截断字符串
 *
 * @param {string} str 要截断的字符串,可能为null
 * @param {number} offset 位置
 * @param {number} maxWidth 结果的最大长度字符串,必须为正整数
 * @return {string}  截断字符串
 * @example
 * truncate(null, 0, 0) = null
 * truncate(null, 2, 4) = null
 * truncate("", 0, 10) = ""
 * truncate("", 2, 10) = ""
 * truncate("abcdefghij", 0, 3) = "abc"
 * truncate("abcdefghij", 5, 6) = "fghij"
 * truncate("raspberry peach", 10, 15) = "peach"
 * truncate("abcdefghijklmno", 0, 10) = "abcdefghij"
 * truncate("abcdefghijklmno", -1, 10) = throw new RangeError
 * truncate("abcdefghijklmno", Number.MIN_SAFE_INTEGER, 10) = throw new RangeError
 * truncate("abcdefghijklmno", Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER) = throw new RangeError
 * truncate("abcdefghijklmno", 0, Number.MAX_SAFE_INTEGER) = "abcdefghijklmno"
 * truncate("abcdefghijklmno", 1, 10) = "bcdefghijk"
 * truncate("abcdefghijklmno", 2, 10) = "cdefghijkl"
 * truncate("abcdefghijklmno", 3, 10) = "defghijklm"
 * truncate("abcdefghijklmno", 4, 10) = "efghijklmn"
 * truncate("abcdefghijklmno", 5, 10) = "fghijklmno"
 * truncate("abcdefghijklmno", 5, 5) = "fghij"
 * truncate("abcdefghijklmno", 5, 3) = "fgh"
 * truncate("abcdefghijklmno", 10, 3) = "klm"
 * truncate("abcdefghijklmno", 10, Number.MAX_SAFE_INTEGER) = "klmno"
 * truncate("abcdefghijklmno", 13, 1) = "n"
 * truncate("abcdefghijklmno", 13, Number.MAX_SAFE_INTEGER) = "no"
 * truncate("abcdefghijklmno", 14, 1) = "o"
 * truncate("abcdefghijklmno", 14, Number.MAX_SAFE_INTEGER) = "o"
 * truncate("abcdefghijklmno", 15, 1) = ""
 * truncate("abcdefghijklmno", 15, Number.MAX_SAFE_INTEGER) = ""
 * truncate("abcdefghijklmno", Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER) = ""
 * truncate("abcdefghij", 3, -1) = throw new RangeError
 * truncate("abcdefghij", -2, 4) = throw new RangeError
 */
declare function truncate(str: string, offset: number, maxWidth: number): string;
export default truncate;
