/**
 * 从指定的字符串中获取一个子串，避免出现异常
 *
 * @param {string} str 从字符串中获取子字符串，可能为null
 * @param {number} start 开始位置，默认为0，负数表示从字符串末尾开始倒数加上字符串长度
 * @param {number} end 结束位置，默认为0，负数表示从字符串末尾开始倒数加上字符串长度
 * @return {string} 根据开始和结束位置获取字符串，可能返回null
 * @example
 * substring(null) = null
 * substring('') = ''
 * substring('abc', 0, 2) = 'ab'
 * substring('abc', 2, 0) = ''
 * substring('abc', 2, 4) = 'c'
 * substring('abc', 4, 6) = ''
 * substring('abc', 2, 2) = ''
 * substring('abc', -2, -1) = 'b'
 * substring('abc', -4, 2) = 'ab'
 */
declare function substring(str: string, start?: number, end?: number): string;
export default substring;
