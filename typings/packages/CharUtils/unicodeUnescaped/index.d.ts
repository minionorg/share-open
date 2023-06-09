/**
 * 将Unicode格式转成为字符
 *
 * @param {string} unicode Unicode 字符串
 * @return {*}  {string} 转义的字符串
 * @example
 * unicodeUnescaped('\\u0020') = ' '
 * unicodeUnescaped('\\u0041') = 'A'
 * unicodeUnescaped('\\u54e6') = '哦'
 */
declare function unicodeUnescaped(unicode: string): string;
export default unicodeUnescaped;
