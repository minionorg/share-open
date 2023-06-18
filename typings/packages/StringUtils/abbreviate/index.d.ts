/**
 * 利用指定的替代标记来缩略字符串
 * 以abbrevMarker是...为例:
 * 后面为...设置offset为0
 * 前面为...设置offset + maxWidth - abbrevMarker.length > str.length
 *
 * @param {string} str 要检查的字符串,可能为null
 * @param {string} abbrevMarker 用作替换标记的字符串
 * @param {number} offset 左边偏移量
 * @param {number} maxWidth 结果字符串的最大长度
 * @return {string} 结果字符串
 * @example
 * abbreviate(null, null, 'any', 'any') = null
 * abbreviate('abcdefghijklmno', null, 'any', 'any') = 'abcdefghijklmno'
 * abbreviate('', '...', 0, 4) = ''
 * abbreviate('abcdefghijklmno', '---', -1, 10) = 'abcdefg---'
 * abbreviate('abcdefghijklmno', ',', 0, 10) = 'abcdefghi,'
 * abbreviate('abcdefghijklmno', ',', 1, 10) = 'abcdefghi,'
 * abbreviate('abcdefghijklmno', ',', 2, 10) = 'abcdefghi,'
 * abbreviate('abcdefghijklmno', '::', 4, 10) = '::efghij::'
 * abbreviate('abcdefghijklmno', '...', 6, 10) = '...ghij...'
 * abbreviate('abcdefghijklmno', '*', 9, 10) = '*ghijklmno'
 * abbreviate('abcdefghijklmno', "'", 10, 10) = "'ghijklmno"
 * abbreviate('abcdefghijklmno', '!', 12, 10) = '!ghijklmno'
 * abbreviate('abcdefghijklmno', '@@@', 14, 10) = '@@@ijklmno'
 */
declare function abbreviate(str: string, abbrevMarker: string, offset: number, maxWidth: number): string;
export default abbreviate;
